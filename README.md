# 🔐 Password Strength Prediction System

A web-based **Password Strength Prediction and Security Analysis System** that evaluates passwords based on their length, character complexity, common-password patterns, entropy, estimated crack time, and other security indicators.

## 🚀 Features

* 🔍 Password strength analysis
* 📊 Security score from 0–100
* 🟢 Weak, Medium, and Strong classification
* 🔑 Password entropy calculation
* ⏳ Estimated password crack time
* 💣 Brute-force estimation
* 📚 Dictionary attack detection
* 🧠 Repeating-pattern analysis
* 🛡️ Breach-risk indication
* 📂 Common-password detection
* ✅ Password requirement validation
* ⭐ Visual strength rating
* 📜 Analysis history using browser local storage
* 📄 Downloadable security report in PDF format
* 👁️ Show/hide password functionality

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* jsPDF
* Browser Local Storage

## 📁 Project Structure

```text
password-strength-prediction-system/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

The user enters a password and clicks **Analyze**.

The system checks:

1. Uppercase characters
2. Lowercase characters
3. Numbers
4. Special characters
5. Password length

A score is then calculated out of 100.

### Password Classification

|  Score | Strength |
| -----: | -------- |
|   0–49 | Weak     |
|  50–79 | Medium   |
| 80–100 | Strong   |

## 📊 Security Analysis

The application provides several security indicators:

* **Entropy** – estimates the password's theoretical randomness.
* **Estimated Crack Time** – estimates the time required for brute-force guessing.
* **Dictionary Attack** – checks against a small set of common passwords.
* **Pattern Analysis** – detects repeated characters.
* **Breach Risk** – provides a risk indication based on the calculated score.
* **Brute Force** – estimates the number of possible combinations.

## 🖥️ Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/password-strength-prediction-system.git
```

### 2. Open the project

```bash
cd password-strength-prediction-system
```

### 3. Run the application

Open:

```text
index.html
```

in a web browser.

No backend server is required for the current version.

## 🔐 Password Requirements

The application checks whether the password contains:

* Uppercase letters
* Lowercase letters
* Numbers
* Special characters
* At least 10 characters

## 📄 Security Report

After analyzing a password, the user can click:

**Download Security Report**

The system generates a PDF containing the calculated security information.

## 📜 Analysis History

The application stores the latest password-analysis results in the browser's **Local Storage** and displays up to five recent analysis records.

## ⚠️ Disclaimer

This project is intended for **educational and cybersecurity awareness purposes**. Crack-time and entropy values are estimates and should not be treated as guarantees of real-world password security.

## 🔮 Future Improvements

* Machine-learning-based password strength prediction
* Larger password dictionary
* Have I Been Pwned API integration
* More advanced pattern detection
* Secure backend processing
* Password generation
* Detailed security recommendations
* User authentication
* Advanced analytics dashboard

## 👨‍💻 Author

**Saggam Vamshi**



