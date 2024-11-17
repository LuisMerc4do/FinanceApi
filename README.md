# 💹 FinanceApp

A modern, responsive finance application that allows users to search stocks using the [Financial Modeling Prep API](https://site.financialmodelingprep.com/). Users can view stock information, add stocks to their portfolio, post comments, and dynamically create new stocks. The app supports user creation, login, and role-based authorization, storing viewed stocks in the database when added to the portfolio or commented on.

🔗 **Live Demo**: [FinanceApp Frontend](https://financeluisfrontend.azurewebsites.net/)

## Overview

The Finance App is designed to provide users with a comprehensive platform for managing and discussing stock information. Users can access detailed stock data, interact through comments, and manage their portfolios efficiently.

## Features

- **View Detailed Stock Information**: Real-time stock data fetched from Financial Modeling Prep API.
- **Post and View Comments**: Engage with other users by commenting on individual stocks.
- **Dynamic Stock Creation**: Add new stocks dynamically if they don't already exist in the system.
- **User Authentication & Authorization**: Secure login using Identity Framework and JWT Tokens.
- **Portfolio Management**: Create and manage personal stock portfolios.
- **Persistent Data Storage**: Stocks viewed from the API are stored in a relational database when added to a portfolio or commented on.
- **Unit Testing**: Includes comprehensive unit tests for key features to ensure code reliability.

## Technologies Used

- **API**: Financial Modeling Prep API
- **Backend**: ASP.NET Core, Entity Framework
- **Database**: Microsoft SQL Server
- **Authentication**: Identity Framework, JWT Tokens
- **Frontend**: React.js, TypeScript, Tailwind CSS
- **CI/CD**: GitHub Actions
- **Deployment**: Azure Web Apps

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [.NET SDK](https://dotnet.microsoft.com/download) (6.0 or higher)
- [Node.js](https://nodejs.org/en/download/) (for the frontend)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [Git](https://git-scm.com/)
- [Azure Account](https://azure.microsoft.com/en-us/free/) (for deployment)

### Clone the Repository

To clone the project, run the following command:

```
git clone https://github.com/your-username/FinanceApp.git
cd FinanceApp
```
```
Backend Setup
Navigate to the backend directory:
```
```
cd FinanceApp/Backend
Install the required .NET dependencies:
```
```
dotnet restore
Configure the database connection string in appsettings.json:
```
```
"ConnectionStrings": {
    "DefaultConnection": "Your SQL Server connection string here"
}
```
Run the database migrations to set up the database schema:

```
dotnet ef database update
Start the backend server:
```
```
dotnet run
```

# 🚢 Deployment
Deploying to Azure
Backend Deployment:

Set up an Azure Web App for the backend.
Use GitHub Actions to automate deployment by configuring your repository secrets with Azure credentials.
Update the appsettings.Production.json with the correct database connection string and API keys.
Frontend Deployment:

Set up a second Azure Web App or Static Web App for the frontend.
Configure the deployment settings to point to the Frontend folder.
Update environment variables if needed to connect to the production backend API.
GitHub Actions:

Set up workflows in .github/workflows to automate CI/CD for both backend and frontend.
Ensure secrets like API keys and database connection strings are securely stored in GitHub Secrets.

# Acknowledgments
Financial Modeling Prep: For providing the stock data API.
ASP.NET Core Documentation: For guiding the backend setup and best practices.
Tailwind CSS: For helping design a modern and responsive frontend.
GitHub Actions & Azure Web Apps: For streamlining the CI/CD process and deployment.
