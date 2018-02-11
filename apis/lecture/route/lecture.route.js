"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const lecture_resource_1 = require("../../../resource/lecture.resource");
const lecture_model_1 = require("../model/lecture.model");
class LectureRoutes {
    constructor() {
        this.lectureRouter = express.Router();
        this.router();
    }
    router() {
        this.lectureRouter.post('/lectures', createLecture);
        this.lectureRouter.get('/lectures', listLecture);
        this.lectureRouter.get('/lectures/name/:lectureName', getLectureByName);
        this.lectureRouter.get('/lectures/track/:track', getLectureByTrack);
        this.lectureRouter.get('/lectures/code/:lectureCode', getLectureByCode);
        this.lectureRouter.put('/lectures/:lectureIndex', updateLecture);
        this.lectureRouter.delete('/lectures/:lectureIndex', deleteLecture);
    }
}
exports.LectureRoutes = LectureRoutes;
/**
 * route: lecture 생성
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
function createLecture(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const lectureData = new lecture_resource_1.lectureResource(req.body);
        try {
            const result = yield lecture_model_1.lecture.createLecture(lectureData.getLectureData());
            res.send(result);
        }
        catch (err) {
            res.send(err.message);
        }
    });
}
/**
 * route: lecture 리스트 조회
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
function listLecture(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield lecture_model_1.lecture.listLecture();
            res.send(result);
        }
        catch (err) {
            res.send(err.message);
        }
    });
}
/**
 * route: lecture lectureByName 조회
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
function getLectureByName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let lectureName = req.params.lectureName;
        try {
            const result = yield lecture_model_1.lecture.getLectureByName(lectureName);
            res.send(result);
        }
        catch (err) {
            res.send(err.message);
        }
    });
}
/**
 * route: lecture lectureByTrack 조회
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
function getLectureByTrack(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let lectureTrack = req.params.track;
        try {
            const result = yield lecture_model_1.lecture.getLectureByTrack(lectureTrack);
            res.send(result);
        }
        catch (err) {
            res.send(err.message);
        }
    });
}
/**
 * route: lecture lectureByCode 조회
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
function getLectureByCode(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let lectureCode = req.params.lectureCode;
        try {
            const result = yield lecture_model_1.lecture.getLectureByCode(lectureCode);
            res.send(result);
        }
        catch (err) {
            res.send(err.message);
        }
    });
}
/**
 * route: lecture 업데이트
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
function updateLecture(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let lectureIndex = req.params.lectureIndex;
        let lectureData = {
            lectureCode: req.body.lectureCode,
            lectureName: req.body.lectureName,
            professorIndex: req.body.professorIndex,
            track: req.body.track
        };
        try {
            const result = yield lecture_model_1.lecture.updateLecture(lectureIndex, lectureData);
            res.send(result);
        }
        catch (err) {
            res.send(err.message);
        }
    });
}
/**
 * route: lecture 삭제
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
function deleteLecture(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let lectureIndex = req.params.lectureIndex;
        try {
            const result = yield lecture_model_1.lecture.deleteLecture(lectureIndex);
            res.send(result);
        }
        catch (err) {
            res.send(err.message);
        }
    });
}
exports.lectureRoutes = new LectureRoutes();
//# sourceMappingURL=lecture.route.js.map