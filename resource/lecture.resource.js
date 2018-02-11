"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class lectureResource {
    constructor(lectureData) {
        this.setLectureIndex(lectureData.lectureIndex);
        this.setLectureCode(lectureData.lectureCode);
        this.setLectureName(lectureData.lectureName);
        this.setProfessorIndex(lectureData.professorIndex);
        this.setTrack(lectureData.track);
    }
    getLectureIndex() {
        return this.lectureIndex;
    }
    setLectureIndex(lectureIndex) {
        this.lectureIndex = lectureIndex;
    }
    getLectureCode() {
        return this.lectureCode;
    }
    setLectureCode(lectureCode) {
        this.lectureCode = lectureCode;
    }
    getLectureName() {
        return this.lectureName;
    }
    setLectureName(lectureName) {
        this.lectureName = lectureName;
    }
    getProfessorIndex() {
        return this.professorIndex;
    }
    setProfessorIndex(professorIndex) {
        this.professorIndex = professorIndex;
    }
    getTrack() {
        return this.track;
    }
    setTrack(track) {
        this.track = track;
    }
    getLectureData() {
        let lectureResource = {
            lectureIndex: this.getLectureIndex(),
            lectureCode: this.getLectureCode(),
            lectureName: this.getLectureName(),
            professorIndex: this.getProfessorIndex(),
            track: this.getTrack(),
        };
        return lectureResource;
    }
}
exports.lectureResource = lectureResource;
//# sourceMappingURL=lecture.resource.js.map