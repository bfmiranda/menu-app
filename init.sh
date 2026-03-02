#!/bin/bash

# Create folders
mkdir -p src/modules/categories
mkdir -p src/modules/transactions
mkdir -p src/shared/database
mkdir -p src/views

# Create files inside modules
touch src/modules/categories/category.model.ts
touch src/modules/categories/category.service.ts
touch src/modules/categories/category.controller.ts

touch src/modules/transactions/transaction.model.ts
touch src/modules/transactions/transaction.service.ts
touch src/modules/transactions/transaction.controller.ts

# Create shared files
touch src/shared/database/mongo.ts
touch src/shared/enums.ts

# Create views
touch src/views/layout.ejs
touch src/views/categories.ejs
touch src/views/transactions.ejs
touch src/views/summary.ejs

# Create root src files
touch src/routes.ts
touch src/app.ts
touch src/server.ts

# Create root project files
touch package.json
touch tsconfig.json
touch .env

echo "Project structure created successfully 🚀"
