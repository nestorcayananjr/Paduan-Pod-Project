class Pod {
    constructor(name, podRoom){
        this.podName = name;
        this.podRoom = podRoom;
        this.totalStudents = 0;
        this.students = {};
    }

    add(student, gradeLevel){
        if (!this.students[gradeLevel]){
            this.students[gradeLevel] = [student]
        } else {
            this.students[gradeLevel].push(student);
        }
        this.totalStudents++
        return this;
    }

    remove(student){
        for (let gradeLevel in this.students){
            if (this.students[gradeLevel].includes(student)){
                let indexOfStudent = this.students[gradeLevel].findIndex((el) => {el === student})
                delete this.students[gradeLevel][indexOfStudent]
            }
        }
        return this;
    }
}