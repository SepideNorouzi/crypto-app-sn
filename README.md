# Crypto Tracker App

A responsive cryptocurrency tracking web application built with React and Vite. The app fetches real-time data for a wide range of cryptocurrencies and displays key market metrics including live prices, market cap, and price history — all presented with interactive charts.


## Features

- Browse and search a list of cryptocurrencies
- View real-time price, market cap, and percentage change data
- Interactive price history charts powered by Recharts
- Smooth loading states with animated spinners
- Responsive layout that works across screen sizes

##  Tech Stack

### Core
| [React 18](https://react.dev/) | UI component library |
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| JavaScript (ES Modules) | Primary language |
| CSS | Styling and layout |

### Libraries
| [Recharts](https://recharts.org/) | Interactive price history charts |
| [react-loader-spinner](https://mhnpd.github.io/react-loader-spinner/) | Loading state animations |

### Dev Tools
| ESLint | Code linting and quality |
| eslint-plugin-react | React-specific lint rules |
| eslint-plugin-react-hooks | Hooks rules enforcement |
| @vitejs/plugin-react | Fast Refresh via Babel |

## Project Structure

```
crypto-app-sn/
├── public/               # Static assets
├── src/                  # Application source code
│   ├── components/       # Reusable UI components
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── index.html            # HTML shell
├── vite.config.js        # Vite configuration
├── .eslintrc.cjs         # ESLint configuration
└── package.json          # Dependencies and scripts
```

## Get Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SepideNorouzi/crypto-app-sn.git
   ```

2. **Navigate into the project directory**
   ```bash
   cd crypto-app-sn
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:5173`

---

## Available Scripts

| `npm run dev` | Start the local development server with Hot Module Replacement |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## API

This app fetches cryptocurrency data from a public crypto market API.

## License

This project is open source and available under the [MIT License](LICENSE).
