"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
//Models
const tasks_model_1 = __importDefault(require("../models/tasks.model"));
router
    .route('/create')
    .get((req, res) => {
    res.render('tasks/create');
})
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const newTask = new tasks_model_1.default({ title, description });
    yield newTask.save();
    res.send('saved');
}));
router.route('/list').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield tasks_model_1.default.find();
    console.log(tasks);
    res.render('tasks/list');
}));
exports.default = router;
