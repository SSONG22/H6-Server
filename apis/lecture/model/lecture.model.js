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
const mysql_resource_1 = require("../../../resource/mysql.resource");
const conn = mysql_resource_1.mysqlResource.conn;
class Lecture {
    constructor() {
    }
    /**
     * model: lecture 생성
     * @param lectureData
     * @returns {Promise<any>}
     */
    createLecture(lectureData) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`INSERT INTO lectures SET ?`, [lectureData], function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(lectureData);
                }
            });
        }));
    }
    /**
     * model: Lecture 리스트 조회
     * @returns {Promise<any>}
     */
    listLecture() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`SELECT * FROM lectures`, function (err, rows) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        }));
    }
    /**
     * model: Lecture lectureByName 조회
     * @param {number} lectureIndex
     * @returns {Promise<any>}
     */
    getLectureByName(lectureName) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`SELECT * FROM lectures WHERE lectureName=?`, [lectureName], function (err, rows) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        }));
    }
    /**
     * model: Lecture lectureByName 조회
     * @param {number} lectureIndex
     * @returns {Promise<any>}
     */
    getLectureByCode(lectureCode) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`SELECT * FROM lectures WHERE lectureCode=?`, [lectureCode], function (err, rows) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        }));
    }
    /**
     * model: Lecture lectureByTrack 조회
     * @param {number} lectureIndex
     * @returns {Promise<any>}
     */
    getLectureByTrack(lectureTrack) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`SELECT * FROM lectures WHERE track=?`, [lectureTrack], function (err, rows) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        }));
    }
    /**
     * model: lecture 업데이트
     * @param {number} lectureIndex
     * @param lectureData
     * @returns {Promise<any>}
     */
    updateLecture(lectureIndex, lectureData) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`UPDATE lectures SET ? WHERE lectureIndex=?`, [lectureData, lectureIndex], function (err, rows) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        }));
    }
    /**
     * model: lecture 삭제
     * @param {number} lectureIndex
     * * @returns {Promise<any>}
     */
    deleteLecture(lectureIndex) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield conn.query(`DELETE FROM lectures WHERE lectureIndex=?`, lectureIndex, function (err, rows) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        }));
    }
}
exports.Lecture = Lecture;
exports.lecture = new Lecture();
//# sourceMappingURL=lecture.model.js.map