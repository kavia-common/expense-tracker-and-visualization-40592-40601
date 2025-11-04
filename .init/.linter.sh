#!/bin/bash
cd /home/kavia/workspace/code-generation/expense-tracker-and-visualization-40592-40601/expense_tracker_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

