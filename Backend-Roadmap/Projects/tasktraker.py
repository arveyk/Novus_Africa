#!/usr/bin/python3
""" Task Tracking program
"""

import datetime
import json
import sys
import uuid

class Tasks:
    task_id0 = uuid.uuid4()
    task_id = 0
    
    def __init__(self, task_description):
        self.id = Tasks.task_id + 1
        self.task_desk = task_description
        self.status = status = 'todo'
        self.createdAt = datetime.datetime.now()
        self.updatedAt = datetime.datetime.now()

    def __str__(self):
        return f'[{Class.__name}] {this.id}, {this.task}, this.status, this.createdAt, this.updatedAt'

    def saveMe(self):
        #Task_file.save(self)
        pass


    def toJson(self, obj):
        '''
        return Json rep of object
        '''
        pass
        

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

    print('task-cli')

    if len(sys.argv) < 2:
        print('please include tasks')
    
    else:
        args = sys.argv
        crud = ["add", "update", "delete"]
        update = ["mark-in-progres", "mark-done"]

        if len(args) > 2:
            '''update'''
            pass

        if args[1] == 'add':
            new_task_desc = args[2]
            #new_task.save()
            new_t = Tasks(new_task_desc)
            print(f'Task added successfully ({new_t.id})')

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
