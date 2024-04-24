import { create } from 'zustand';
import moment from 'moment';
import { getNameById, getObjById, getParentId } from '../dbs/FsDb';

export const useFsStore = create((set) => ({
  currentId: 0,
  currentName: getNameById(0),
  currentContent: getObjById(0),
  setId: (id) => {
    set((state) => ({ currentId: id }));
    set((state) => ({ currentContent: getObjById(state.currentId), currentContent: getObjById(state.currentId) }));
  },
  goParent: () => {
    set((state) => ({ currentId: getParentId(state.currentId) }));
    set((state) => ({ currentContent: getObjById(state.currentId), currentContent: getObjById(state.currentId) }));
  },
}));

