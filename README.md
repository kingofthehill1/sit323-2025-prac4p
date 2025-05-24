# SIT323 4.1P - Calculator Microservice

This microservice was developed as part of the SIT323 Cloud Native Application Development unit. It provides basic arithmetic operations—addition, subtraction, multiplication, and division—via simple HTTP GET requests using Node.js and Express.

## Project Structure

- `index.js`: The main application file containing route definitions and logic.
- `package.json`: Lists project dependencies and metadata.
- `package-lock.json`: Automatically generated, locks dependency versions.
- `node_modules/`: Installed dependencies.

## Development Process Documentation

### Designing the API Endpoints
The microservice uses RESTful HTTP GET routes for four basic arithmetic operations. Each endpoint accepts two query parameters: `num1` and `num2`.

- `/add`
- `/subtract`
- `/multiply`
- `/divide`

This structure was chosen for simplicity and clarity. Each route performs a specific task and returns a result in JSON format.

### Error Handling Strategy
I implemented simple validation for:
- Missing or non-numeric inputs → returns a 400 error with `Invalid numbers`
- Division by zero → returns a 400 error with `Cannot divide by zero`

The goal was to maintain minimal but effective feedback for common issues.

### Development Methodology
The project was created and tested locally using:
- Node.js
- Visual Studio Code
- npm for dependency management

## Setup Instructions

1. **Clone the project or copy it into a folder**, for example:
   ```
   D:\x\y\z\2025\SIT323\4.1P\Complete\sit323-4.1p
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the microservice**:
   ```
   node index.js
   ```

You should see:
```
Calculator microservice running at http://localhost:3000
```

## API Endpoints

All use HTTP GET and require two query parameters: `num1` and `num2`.

- **Addition**
  ```
  GET /add?num1=5&num2=3
  Response: { "result": 8 }
  ```

- **Subtraction**
  ```
  GET /subtract?num1=10&num2=4
  Response: { "result": 6 }
  ```

- **Multiplication**
  ```
  GET /multiply?num1=7&num2=6
  Response: { "result": 42 }
  ```

- **Division**
  ```
  GET /divide?num1=20&num2=4
  Response: { "result": 5 }
  ```

## Testing the Service

You can test using:
- Browser: `http://localhost:3000/add?num1=5&num2=3`
- curl:
  ```
  curl "http://localhost:3000/add?num1=5&num2=3"
  curl "http://localhost:3000/divide?num1=8&num2=0"
  ```

### Expected Errors

- Missing or invalid parameters:
  ```
  Invalid numbers
  ```

- Division by zero:
  ```
  Cannot divide by zero
  ```

## Enhanced Technical Details

### Code Structure (`index.js`)
- Routes for each operation
- Error checking for invalid input
- Uses `express.json()` middleware for request parsing (though body is not used here)

### `package.json`
Defines metadata and dependencies:
- Express (lightweight and fast HTTP framework)
- Project scripts (none used here, could include `"start": "node index.js"`)

### Why Express?
- Simple syntax
- Minimal setup
- Ideal for quick REST API projects

## Academic Context

This task satisfies requirements for:
- **SIT323: Cloud Native Application Development**
- **Practical Task 4.1P: Basic Microservice Design and Deployment**

### Learning Objectives Achieved
- RESTful service design
- Basic error handling
- Microservice architecture with Node.js and Express
- GitHub-based project versioning and documentation

## Troubleshooting

| Issue                    | Solution                                  |
|-------------------------|-------------------------------------------|
| Port already in use     | Change port in `index.js` (e.g., to 3001) |
| `npm install` fails     | Ensure Node.js is installed correctly     |
| Cannot GET `/`          | This is expected—no root route is defined |

## Future Improvements
- Add support for more complex math
- Implement POST request support
- Add logging or request history

## Author
TPH Hewage - Deakin University  
GitHub: https://github.com/kingofthehill1/sit323-2025-prac4p
