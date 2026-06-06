// ===== NAVIGATION =====
function showSection(sectionId) {
    document.querySelectorAll('.calc-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    event.target.closest('.nav-tab').classList.add('active');
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

function formatNumber(num) {
    if (num === 0) return '0';
    if (Math.abs(num) < 0.001 || Math.abs(num) >= 1000000) {
        return num.toExponential(4);
    }
    return parseFloat(num.toPrecision(6)).toString();
}

// ===== OHM'S LAW =====
let ohmsMode = 'v';

function setOhmsMode(mode) {
    ohmsMode = mode;
    document.querySelectorAll('#ohms .phase-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    const inputs = document.getElementById('ohms-inputs');
    const formula = document.getElementById('ohms-formula');

    const templates = {
        v: {
            html: `<div class="form-group"><label>Current (I)</label><div class="input-wrapper"><input type="number" id="ohms-i" placeholder="Enter current" step="any"><span class="unit">A</span></div></div>
                   <div class="form-group"><label>Resistance (R)</label><div class="input-wrapper"><input type="number" id="ohms-r" placeholder="Enter resistance" step="any"><span class="unit">Ω</span></div></div>`,
            formula: 'Formula: V = I × R'
        },
        i: {
            html: `<div class="form-group"><label>Voltage (V)</label><div class="input-wrapper"><input type="number" id="ohms-v" placeholder="Enter voltage" step="any"><span class="unit">V</span></div></div>
                   <div class="form-group"><label>Resistance (R)</label><div class="input-wrapper"><input type="number" id="ohms-r" placeholder="Enter resistance" step="any"><span class="unit">Ω</span></div></div>`,
            formula: 'Formula: I = V ÷ R'
        },
        r: {
            html: `<div class="form-group"><label>Voltage (V)</label><div class="input-wrapper"><input type="number" id="ohms-v" placeholder="Enter voltage" step="any"><span class="unit">V</span></div></div>
                   <div class="form-group"><label>Current (I)</label><div class="input-wrapper"><input type="number" id="ohms-i" placeholder="Enter current" step="any"><span class="unit">A</span></div></div>`,
            formula: 'Formula: R = V ÷ I'
        },
        p: {
            html: `<div class="form-group"><label>Voltage (V)</label><div class="input-wrapper"><input type="number" id="ohms-v" placeholder="Enter voltage" step="any"><span class="unit">V</span></div></div>
                   <div class="form-group"><label>Current (I)</label><div class="input-wrapper"><input type="number" id="ohms-i" placeholder="Enter current" step="any"><span class="unit">A</span></div></div>`,
            formula: 'Formula: P = V × I'
        }
    };

    inputs.innerHTML = templates[mode].html;
    formula.innerHTML = templates[mode].formula;
    document.getElementById('ohms-result').style.display = 'none';
}

function calculateOhms() {
    let result, unit;

    if (ohmsMode === 'v') {
        const i = parseFloat(document.getElementById('ohms-i').value);
        const r = parseFloat(document.getElementById('ohms-r').value);
        if (!i || !r) return;
        result = i * r;
        unit = 'V';
    } else if (ohmsMode === 'i') {
        const v = parseFloat(document.getElementById('ohms-v').value);
        const r = parseFloat(document.getElementById('ohms-r').value);
        if (!v || !r || r === 0) return;
        result = v / r;
        unit = 'A';
    } else if (ohmsMode === 'r') {
        const v = parseFloat(document.getElementById('ohms-v').value);
        const i = parseFloat(document.getElementById('ohms-i').value);
        if (!v || !i || i === 0) return;
        result = v / i;
        unit = 'Ω';
    } else {
        const v = parseFloat(document.getElementById('ohms-v').value);
        const i = parseFloat(document.getElementById('ohms-i').value);
        if (!v || !i) return;
        result = v * i;
        unit = 'W';
    }

    document.getElementById('ohms-res-val').textContent = formatNumber(result);
    document.getElementById('ohms-res-unit').textContent = unit;
    document.getElementById('ohms-result').style.display = 'block';
    showToast("Ohm's Law calculated!");
}

// ===== POWER CALCULATOR =====
function calculatePower() {
    const v = parseFloat(document.getElementById('pow-v').value);
    const i = parseFloat(document.getElementById('pow-i').value);
    const r = parseFloat(document.getElementById('pow-r').value);

    let p;
    if (v && i) {
        p = v * i;
    } else if (i && r) {
        p = i * i * r;
    } else if (v && r) {
        p = (v * v) / r;
    } else {
        return;
    }

    document.getElementById('power-res-val').textContent = formatNumber(p);
    document.getElementById('power-result').style.display = 'block';
    showToast('Power calculated!');
}

function calculatePowerTriangle() {
    const p = parseFloat(document.getElementById('pt-p').value);
    const q = parseFloat(document.getElementById('pt-q').value);
    if (!p || !q) return;

    const s = Math.sqrt(p * p + q * q);
    const pf = p / s;

    document.getElementById('pt-res-val').textContent = formatNumber(s);
    document.getElementById('pt-pf').textContent = pf.toFixed(3);
    document.getElementById('pt-result').style.display = 'block';
    showToast('Power triangle calculated!');
}

// ===== THREE-PHASE POWER =====
let phaseConfig = 'star';

function setPhaseConfig(config) {
    phaseConfig = config;
    document.querySelectorAll('#threephase .phase-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
}

function calculateThreePhase() {
    const vl = parseFloat(document.getElementById('tp-vl').value);
    const il = parseFloat(document.getElementById('tp-il').value);
    const pf = parseFloat(document.getElementById('tp-pf').value) || 0.85;

    if (!vl || !il) return;

    const p = Math.sqrt(3) * vl * il * pf;
    const s = Math.sqrt(3) * vl * il;
    const q = Math.sqrt(s * s - p * p);

    document.getElementById('tp-res-val').textContent = formatNumber(p / 1000);
    document.getElementById('tp-app').textContent = formatNumber(s / 1000);
    document.getElementById('tp-reac').textContent = formatNumber(q / 1000);
    document.getElementById('tp-result').style.display = 'block';
    showToast('3-Phase power calculated!');
}

// ===== TRANSFORMER =====
function calculateTransformer() {
    const pin = parseFloat(document.getElementById('trans-pin').value);
    const pout = parseFloat(document.getElementById('trans-pout').value);
    const core = parseFloat(document.getElementById('trans-core').value);
    const copper = parseFloat(document.getElementById('trans-copper').value);

    let losses, eff;
    if (pin && pout) {
        losses = pin - pout;
        eff = (pout / pin) * 100;
    } else if (pout && !isNaN(core) && !isNaN(copper)) {
        losses = core + copper;
        eff = (pout / (pout + losses)) * 100;
    } else {
        return;
    }

    document.getElementById('trans-res-val').textContent = eff.toFixed(2);
    document.getElementById('trans-loss').textContent = formatNumber(losses);
    document.getElementById('trans-result').style.display = 'block';
    showToast('Transformer efficiency calculated!');
}

function calculateRegulation() {
    const vnl = parseFloat(document.getElementById('vr-vnl').value);
    const vfl = parseFloat(document.getElementById('vr-vfl').value);
    if (!vnl || !vfl || vfl === 0) return;

    const vr = ((vnl - vfl) / vfl) * 100;
    document.getElementById('vr-res-val').textContent = vr.toFixed(2);
    document.getElementById('vr-result').style.display = 'block';
    showToast('Voltage regulation calculated!');
}

// ===== VOLTAGE DIVIDER =====
function calculateDivider() {
    const vin = parseFloat(document.getElementById('vd-vin').value);
    const r1 = parseFloat(document.getElementById('vd-r1').value);
    const r2 = parseFloat(document.getElementById('vd-r2').value);

    if (!vin || !r1 || !r2) return;

    const vout = vin * (r2 / (r1 + r2));
    const ratio = r2 / (r1 + r2);

    document.getElementById('vd-res-val').textContent = formatNumber(vout);
    document.getElementById('vd-ratio').textContent = ratio.toFixed(4);
    document.getElementById('vd-result').style.display = 'block';
    showToast('Voltage divider calculated!');
}

function calculateReverseDivider() {
    const vin = parseFloat(document.getElementById('vdr-vin').value);
    const vout = parseFloat(document.getElementById('vdr-vout').value);
    const rknown = parseFloat(document.getElementById('vdr-rknown').value);
    const which = document.getElementById('vdr-which').value;

    if (!vin || !vout || !rknown || vin === 0) return;

    let r;
    if (which === 'r1') {
        r = rknown * (vout / (vin - vout));
    } else {
        r = rknown * ((vin - vout) / vout);
    }

    document.getElementById('vdr-res-val').textContent = formatNumber(r);
    document.getElementById('vdr-result').style.display = 'block';
    showToast('Resistor value found!');
}

// ===== UNIT CONVERTER =====
const unitData = {
    voltage: { base: 'V', units: { V: 1, mV: 0.001, kV: 1000, MV: 1000000 } },
    current: { base: 'A', units: { A: 1, mA: 0.001, 'μA': 0.000001, kA: 1000 } },
    resistance: { base: 'Ω', units: { 'Ω': 1, mΩ: 0.001, kΩ: 1000, MΩ: 1000000 } },
    power: { base: 'W', units: { W: 1, mW: 0.001, kW: 1000, MW: 1000000, hp: 745.7 } },
    capacitance: { base: 'F', units: { F: 1, mF: 0.001, 'μF': 0.000001, nF: 1e-9, pF: 1e-12 } },
    inductance: { base: 'H', units: { H: 1, mH: 0.001, 'μH': 0.000001, nH: 1e-9 } },
    frequency: { base: 'Hz', units: { Hz: 1, kHz: 1000, MHz: 1000000, GHz: 1000000000 } }
};

function updateUnitOptions() {
    const cat = document.getElementById('uc-category').value;
    const units = unitData[cat].units;
    const fromSelect = document.getElementById('uc-from-unit');
    const toSelect = document.getElementById('uc-to-unit');

    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';

    const unitKeys = Object.keys(units);
    unitKeys.forEach((u, i) => {
        fromSelect.add(new Option(u, u, i === 0, i === 0));
        toSelect.add(new Option(u, u, i === 1, i === 1));
    });

    document.getElementById('uc-formula').textContent = 'Converting ' + cat + ' units';
    convertUnit();
}

function convertUnit() {
    const cat = document.getElementById('uc-category').value;
    const fromVal = parseFloat(document.getElementById('uc-from-val').value);
    const fromUnit = document.getElementById('uc-from-unit').value;
    const toUnit = document.getElementById('uc-to-unit').value;

    if (!fromVal) {
        document.getElementById('uc-to-val').value = '';
        return;
    }

    const units = unitData[cat].units;
    const baseVal = fromVal * units[fromUnit];
    const result = baseVal / units[toUnit];

    document.getElementById('uc-to-val').value = formatNumber(result);
    document.getElementById('uc-formula').innerHTML = 
        '1 ' + fromUnit + ' = ' + formatNumber(units[fromUnit] / units[toUnit]) + ' ' + toUnit;
}

function swapUnits() {
    const fromUnit = document.getElementById('uc-from-unit');
    const toUnit = document.getElementById('uc-to-unit');
    const temp = fromUnit.value;
    fromUnit.value = toUnit.value;
    toUnit.value = temp;
    convertUnit();
}

// ===== CABLE SIZE ESTIMATOR =====
const cableRatings = {
    'cu-pvc': { 1.5: 17, 2.5: 24, 4: 32, 6: 41, 10: 57, 16: 76, 25: 101, 35: 125, 50: 151, 70: 192, 95: 232, 120: 269, 150: 300, 185: 341, 240: 400, 300: 458 },
    'cu-xlpe': { 1.5: 22, 2.5: 30, 4: 40, 6: 52, 10: 71, 16: 96, 25: 127, 35: 157, 50: 190, 70: 242, 95: 292, 120: 339, 150: 384, 185: 436, 240: 515, 300: 591 },
    'al-pvc': { 16: 59, 25: 78, 35: 97, 50: 117, 70: 149, 95: 180, 120: 208, 150: 236, 185: 268, 240: 317, 300: 364 },
    'al-xlpe': { 16: 75, 25: 99, 35: 122, 50: 148, 70: 188, 95: 227, 120: 263, 150: 298, 185: 338, 240: 400, 300: 458 }
};

const cableResistivity = {
    'cu-pvc': 0.0225, 'cu-xlpe': 0.0225,
    'al-pvc': 0.036, 'al-xlpe': 0.036
};

const installFactors = {
    'conduit': 1.0, 'wall': 1.15, 'underground': 0.85, 'tray': 1.2
};

function calculateCableSize() {
    const current = parseFloat(document.getElementById('cs-current').value);
    const type = document.getElementById('cs-type').value;
    const install = document.getElementById('cs-install').value;
    const length = parseFloat(document.getElementById('cs-length').value) || 0;
    const maxVdrop = parseFloat(document.getElementById('cs-vdrop').value) || 3;

    if (!current) return;

    const ratings = cableRatings[type];
    const factor = installFactors[install];
    const adjustedCurrent = current / factor;

    let size = null;
    const sizes = Object.keys(ratings).map(Number).sort((a, b) => a - b);

    for (let s of sizes) {
        if (ratings[s] >= adjustedCurrent) {
            size = s;
            break;
        }
    }

    if (!size) {
        size = sizes[sizes.length - 1];
    }

    // Voltage drop check
    let vdPercent = 0;
    if (length > 0) {
        const rho = cableResistivity[type];
        const vd = (2 * current * length * rho) / size;
        const assumedVoltage = 230; // Single phase assumption
        vdPercent = (vd / assumedVoltage) * 100;

        // If voltage drop exceeds limit, find larger cable
        while (vdPercent > maxVdrop) {
            const nextSizeIdx = sizes.indexOf(Number(size)) + 1;
            if (nextSizeIdx >= sizes.length) break;
            size = sizes[nextSizeIdx];
            const vd2 = (2 * current * length * rho) / size;
            vdPercent = (vd2 / assumedVoltage) * 100;
        }
    }

    document.getElementById('cs-res-val').textContent = size;
    document.getElementById('cs-vd').textContent = vdPercent.toFixed(2);
    document.getElementById('cs-result').style.display = 'block';
    showToast('Cable size estimated!');
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', function() {
    updateUnitOptions();
});
