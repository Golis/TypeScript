"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = /** @class */ (function () {
    function Project(name2, budget2) {
        this.name1 = name2;
        this.budget1 = budget2;
    }
    Project.prototype.printBudget = function () {
        console.log("".concat(this.name1, " has a budget of ").concat(this.budget1));
    };
    Project.prototype.getProjectName = function () {
        return this.name1;
    };
    Project.prototype.setProjectName = function (newName) {
        this.name1 = newName;
    };
    return Project;
}());
var project = new Project('BestProject', 1000);
project.printBudget();
