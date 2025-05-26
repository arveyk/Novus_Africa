#!/usr/bin/python3
""" Task Tracking program
"""

import sys
import uuid
import datetime

class Tasks:
    task_id = uuid.uuid4()
    def __init__(task):
        this.task_desk = task_desk
        this.status = status = 'todo'
        this.createdAt = datetime.datetime.now()
        this.updatedAt = datatime.datetime.now()


def task_tracker():
    if len(sys.argv) !> 0:
        print('please include tasks')
    else:
        args = sys.argv
        crud = ["add", "update", "delete"]
        if len(args) > 2:
            '''update'''
            pass
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

        tasks = sys.argv[]
        print(sys.argv)

if __name__ == "__main__":
    task_tracker()
