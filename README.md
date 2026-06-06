# ⚡ EEE Calculator Suite

[![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-❤️-ff69b4?style=flat-square)](https://github.com/sarukesh-crater/eee-calc-suite)

> A professional-grade, browser-based calculator suite for Electrical & Electronics Engineers, technicians, and students. All calculations happen **instantly** in your browser — no server, no sign-up, no data collection.

![EEE Calculator Suite Preview](https://via.placeholder.com/1200x600/0a0e1a/f59e0b?text=EEE+Calculator+Suite+Preview)

---

## ✨ Features

| Calculator | What It Does |
|------------|-------------|
| **⚡ Ohm's Law** | Solve for Voltage, Current, Resistance, or Power with an interactive triangle visualization |
| **🔌 Power** | Calculate power from V×I, I²R, or V²/R + Power Triangle (Active/Reactive/Apparent) |
| **🔋 3-Phase Power** | Star (Y) vs Delta (Δ) configurations with kW/kVA/kVAR output |
| **🔄 Transformer** | Efficiency from Pin/Pout or losses + Voltage Regulation calculator |
| **📊 Voltage Divider** | Calculate Vout OR reverse-engineer missing resistor values |
| **🔄 Unit Converter** | 7 categories: Voltage, Current, Resistance, Power, Capacitance, Inductance, Frequency |
| **🔌 Cable Size** | Estimate cable size with installation factors + voltage drop check |

---

## 🚀 Quick Start

No build step. No dependencies. Just open and use.

```bash
# Clone the repo
git clone https://github.com/sarukesh-crater/eee-calc-suite.git

# Open in browser
cd eee-calc-suite
open index.html
```

Or simply download the files and double-click `index.html`.

---

## 📁 Project Structure

```
eee-calc-suite/
├── index.html          # Main HTML structure
├── style.css           # Dark theme, animations, responsive design
├── script.js           # All calculation logic
└── README.md           # You are here
```

---

## 🧮 Calculator Details

### ⚡ Ohm's Law Calculator
- Solve for **V, I, R, or P** with dynamic input switching
- Interactive **SVG triangle** visualization
- Real-time formula display

### 🔌 Power Calculator
- Three ways to calculate: `P = V×I`, `P = I²R`, `P = V²÷R`
- **Power Triangle**: Active (W), Reactive (VAR), Apparent (VA) + Power Factor

### 🔋 Three-Phase Power
- **Star (Y)** and **Delta (Δ)** configurations
- Outputs: Active Power (kW), Apparent Power (kVA), Reactive Power (kVAR)
- Phase relationship reference table

### 🔄 Transformer Efficiency
- Efficiency from **input/output power** OR **core + copper losses**
- **Voltage Regulation**: `(V_NL - V_FL) / V_FL × 100`

### 📊 Voltage Divider
- Standard: `Vout = Vin × (R2 / (R1 + R2))`
- **Reverse mode**: Find missing resistor for desired output

### 🔄 Unit Converter
- 7 electrical categories with SI prefixes
- Live conversion + swap button
- Prefix reference table (Tera → Pico)

### 🔌 Cable Size Estimator
- Material: Copper/Aluminum × PVC/XLPE
- Installation: Conduit, Wall, Underground, Tray
- Auto voltage-drop check with upsizing
- Current rating reference table

---

## 🎨 Design

- **Dark electric theme** with animated gradient background
- **Responsive** — works on mobile, tablet, and desktop
- **Toast notifications** on every calculation
- **Shimmer effects** on result boxes
- **Hover animations** on cards
- **Formula display** for every calculator
- **Zero external dependencies** (except Google Fonts)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic structure |
| CSS3 | Custom properties, Grid, Flexbox, animations |
| Vanilla JavaScript | All logic, no frameworks |
| Google Fonts | Inter + JetBrains Mono |

---

## 📱 Responsive

| Breakpoint | Layout |
|-----------|--------|
| Desktop (>768px) | 2-column grid |
| Mobile (≤768px) | Single column, stacked |

---

## ⚠️ Disclaimer

All calculations are **estimates** for educational and reference purposes. Always consult relevant standards (**IEC, NEC, BS**) and qualified professionals for actual electrical installations.

---

## 🤝 Contributing

Contributions are welcome! If you have an idea for a new calculator or an improvement:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-calculator`)
3. Commit your changes (`git commit -m 'Add amazing calculator'`)
4. Push to the branch (`git push origin feature/amazing-calculator`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Built as part of a **daily build challenge** — one project every day
- Inspired by the need for clean, fast, offline electrical engineering tools
- Fonts by [Google Fonts](https://fonts.google.com)

---

<div align="center">

**Built with ⚡ by Sarukesh-crater (https://github.com/sarukesh-crater)**

*Star ⭐ this repo if you find it useful!*

</div>
