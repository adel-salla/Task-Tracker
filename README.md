# Task Tracker CLI
A simple task management tool built with Node.js using a clean architecture: domain, repository, use cases, and CLI adapter.

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Commands](#commands)
4. [Development](#development)
5. [License](#license)

---

## Installation

Clone the repo:
```
git clone <repo-url>
cd Task-Tracker
```
Make sure Node.js is installed (>= v22 recommended).

__Note__: 
No dependencies are used for now.

---

## Usage
Run the CLI with Node:
```task <command> [arguments]```

---

## Commands
|Command|Description|Example|
|-------|-----------|-------|
|add|Add a new task|task add "Walk description"|
|delete/del|Delete a task by Id|task delete 1|
|list/li|List tasks|task list|
|list/li done|List completed tasks|task list done|
|list/li not-done|List pending tasks|task list not-done|
|list/li in-progress|List in progress tasks|task list in-progress|
|mark/m|Update a task status|task mark done 1|
|update/u|Update a task description|task update 1 "New description"|

__Notes__ on Statuses:
- done -> Task completed
- not-done -> Task pending
- in-progress -> Task in progress

---

## Development
- __Repository__: JsonTaskRepository handles storing tasks in tasks.json.
- __Domain__: Task object with status logic.
- __Use cases__: Like addTask, deleteTask, updateTask.
- __Adapters__: CLI handles user input and output formatting.

---

## License
MIT License © 2026