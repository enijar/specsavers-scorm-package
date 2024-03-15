import { create } from "zustand";
import { scorm } from "@/services/scorm.ts";

type Bookmark = {
  pathname: string;
};

type DefaultBookmark = Pick<Bookmark, "pathname">;

type AppState = {
  initialize: () => Bookmark | DefaultBookmark;
  bookmark: Bookmark | DefaultBookmark;
  updateBookmark: (bookmark: Partial<Bookmark>) => void;
};

const DEFAULT_BOOKMARK: DefaultBookmark = {
  pathname: "/",
};

export const appState = create<AppState>((setState, getState) => {
  return {
    initialize() {
      scorm.initialize();
      const bookmark = scorm.get<ReturnType<AppState["initialize"]>>("cmi.suspend_data", DEFAULT_BOOKMARK);
      setState({ bookmark });
      return bookmark;
    },
    bookmark: { ...DEFAULT_BOOKMARK },
    updateBookmark(bookmark) {
      setState({ bookmark: { ...getState().bookmark, ...bookmark } });
    },
  };
});
