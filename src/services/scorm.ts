import { scorm as api } from "@gamestdio/scorm";

// For debugging
(window as any).SCORM_API = api;

api.configure({ version: "2004", handleExitMode: true, debug: true });

export const scorm = {
  initialize() {
    api.initialize();
  },
  get<T = any>(key: string, defaultValue?: T) {
    const parse = (value: string) => {
      if (value === "") {
        return defaultValue;
      }
      try {
        return JSON.parse(value) ?? defaultValue;
      } catch {
        return defaultValue;
      }
    };
    if (!api.isActive) {
      return parse(localStorage.getItem(key) ?? "");
    }
    const value = api.get(key);
    if (value === "") {
      return defaultValue;
    }
    return key === "cmi.suspend_data" ? parse(value) : value;
  },
  set(key: string, value: any) {
    if (!api.isActive) {
      return;
    }
    api.set(key, key === "cmi.suspend_data" ? JSON.stringify(value) : value);
  },
  commit() {
    if (!api.isActive) {
      return;
    }
    api.commit();
  },
  terminate() {
    if (!api.isActive) {
      return;
    }
    this.commit();
    api.terminate();
  },
};
