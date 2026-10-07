from fastapi import FastAPI
from models import Student
from database import student_collection


app=FastAPI()
def student_details(student):
    return{
        "id":str(student["_id"]),
        "name":student["name"],
        "email":student["email",],
        "age":student["age"],
        "mark":student["mark"]

        
    }
@app.get("/getStudents")
def getStudents():
    students=student_collection.find()
    return[student_details(student) for student in students]
@app.post("/register")
def register(Stu:Student):
    result=student_collection.insert_one(Stu.model_dump())
    return {"message":"data inserted success"}




@app.put("/update")
def update():
    return "update api is called"
@app.delete("/delete")
def delete():
    return "delete api is called"



@app.get("/getStudentsDet/{userid}")
def getStudentsDet(userid:int):
    return {"user_id":userid}

@app.get("/getStudentsdetails")
def getstudentsdetails(page:int=1,limit:int=10):
    return {"page":page,"limit":limit} 