import { create } from 'zustand';
import moment from 'moment';
import { getNameById,getObjById } from '../dbs/FsDb';

export const useFsStore = create((set) => ({
  currentId: 0,
  currentName: getNameById(0),
  currentContent:getObjById(0),
  idAdd: () => {
    set((state) => ({ currentId: state.currentId + 1 }));
    set((state) => ({ currentName: getNameById(state.currentId),currentContent: getObjById(state.currentId)}));
  },
  idMinus: () => set((state) => ({ currentId: state.currentId - 1, currentName: moment().format() })),
}));

