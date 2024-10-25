import NOTES from '../constants/notes'
export default (note) => {
    return NOTES.includes(note) && note.includes('#')
}