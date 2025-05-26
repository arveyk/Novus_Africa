#!/usr/bin/python3
""" Task Tracking program
"""


import datetime
import json
import sys
import uuid

class Tasks:
    task_id = uuid.uuid4()
    myId = 0
    def __init__(self, task_desk):
        this.id = Tasks.myId + 1
        this.task_desk = task_desk
        this.status = status = 'todo'
        this.createdAt = datetime.datetime.now()
        this.updatedAt = datatime.datetime.now()

    def __str__(self):
        return f'[{Class.__name}] {this.id}, {this.task}, this.status, this.createdAt, this.updatedAt'

    def saveMe(self):
        Task_file.save(self)


    def toJson(self, obj):
        '''
        return Json rep of object
        '''
        return json(obj)
        

class Task_file:
    tasksDB = {}
    def __init__(self):
        pass
    def save(self, obj):
        pass
    def all(self, obj):
        """Prints all tasks"""
        pass


def task_tracker():
    if len(sys.argv) < 2:
        print('please include tasks')
    else:
        args = sys.argv
        crud = ["add", "update", "delete"]
        if len(args) > 2:
            '''update'''
            pass
        if args[1] == 'add':
            new_task = Task(args[2])
            new_task.save()
            print(new_task)

        if args[1] == 'list':
            if len(args) == 2:
                '''list all tasks'''
                pass
            else:
                task_status = args[2]
                if task_status == 'done':
                    '''list all done'''
                    pass
                elif task_status == 'todo':
                    '''list all todo'''
                    pass
                elif task_status == 'in-progress':
                    '''List tasks in progress'''
                    pass


if __name__ == "__main__":
    task_tracker()
