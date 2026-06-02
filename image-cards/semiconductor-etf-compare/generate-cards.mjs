import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = new URL('.', import.meta.url).pathname;
const width = 900;
const height = 1200;

const colors = {
  bg: '#F5F0E8',
  ink: '#1F2933',
  muted: '#64748B',
  smh: '#F8B8A8',
  smhDark: '#E8655A',
  soxx: '#A8D8EA',
  soxxDark: '#2B8CB8',
  mint: '#B5E5CF',
  lavender: '#D5C6E0',
  cream2: '#FFF9EF',
};

const watermark = '西门吹雪的资产修行';

function esc(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function text(x, y, content, size = 34, weight = 500, fill = colors.ink, anchor = 'start') {
  return `<text x="${x}" y="${y}" font-family="-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Noto Sans CJK SC', Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(content)}</text>`;
}

function multiline(x, y, lines, size = 30, gap = 44, weight = 500, fill = colors.ink, anchor = 'start') {
  return lines.map((line, i) => text(x, y + i * gap, line, size, weight, fill, anchor)).join('\n');
}

function roundedRect(x, y, w, h, fill, stroke = colors.ink, sw = 3, r = 22, extra = '') {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
}

function chip(x, y, w, h, fill, label, sharp = false) {
  const pins = [];
  for (let i = 0; i < 7; i++) {
    const px = x + 50 + i * ((w - 100) / 6);
    pins.push(`<line x1="${px}" y1="${y - 18}" x2="${px}" y2="${y}" stroke="${colors.ink}" stroke-width="3" stroke-linecap="round"/>`);
    pins.push(`<line x1="${px}" y1="${y + h}" x2="${px}" y2="${y + h + 18}" stroke="${colors.ink}" stroke-width="3" stroke-linecap="round"/>`);
  }
  for (let i = 0; i < 5; i++) {
    const py = y + 44 + i * ((h - 88) / 4);
    pins.push(`<line x1="${x - 18}" y1="${py}" x2="${x}" y2="${py}" stroke="${colors.ink}" stroke-width="3" stroke-linecap="round"/>`);
    pins.push(`<line x1="${x + w}" y1="${py}" x2="${x + w + 18}" y2="${py}" stroke="${colors.ink}" stroke-width="3" stroke-linecap="round"/>`);
  }
  const motif = sharp
    ? `<path d="M${x + 92} ${y + h - 52} L${x + w - 76} ${y + 52} L${x + w - 110} ${y + 132} L${x + w - 42} ${y + 102}" fill="none" stroke="${colors.smhDark}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`
    : `<g stroke="${colors.soxxDark}" stroke-width="5" fill="none"><path d="M${x + 70} ${y + 82}H${x + w - 70}M${x + 70} ${y + 140}H${x + w - 70}M${x + 70} ${y + 198}H${x + w - 70}"/><path d="M${x + 116} ${y + 48}V${y + h - 48}M${x + 196} ${y + 48}V${y + h - 48}M${x + 276} ${y + 48}V${y + h - 48}"/></g>`;
  return `<g>${pins.join('\n')}${roundedRect(x, y, w, h, fill)}${motif}${text(x + w / 2, y + h / 2 + 18, label, 56, 800, colors.ink, 'middle')}</g>`;
}

function bars(x, y, data, color, max = 20) {
  return data.map((d, i) => {
    const bw = Math.max(88, (d.value / max) * 310);
    const yy = y + i * 74;
    return `<g>
      ${text(x, yy + 31, d.label, 27, 650)}
      ${roundedRect(x + 110, yy, 330, 38, colors.cream2, colors.ink, 2, 18)}
      ${roundedRect(x + 110, yy, bw, 38, color, colors.ink, 2, 18)}
      ${text(x + 462, yy + 30, d.note, 25, 650, colors.ink)}
    </g>`;
  }).join('\n');
}

function shell(title, subtitle, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="900" height="1200" fill="${colors.bg}"/>
  <path d="M65 110 C180 70, 305 82, 402 112 S640 144, 812 104" fill="none" stroke="${colors.lavender}" stroke-width="5" stroke-linecap="round" opacity="0.65"/>
  <circle cx="92" cy="1032" r="34" fill="${colors.mint}" stroke="${colors.ink}" stroke-width="3" opacity="0.9"/>
  <circle cx="806" cy="146" r="24" fill="${colors.soxx}" stroke="${colors.ink}" stroke-width="3" opacity="0.9"/>
  ${text(72, 112, title, 58, 850)}
  ${subtitle ? text(76, 166, subtitle, 29, 550, colors.muted) : ''}
  ${body}
  ${text(820, 1140, watermark, 21, 500, colors.muted, 'end')}
</svg>`;
}

const cards = [
  {
    file: '01-cover-semiconductor-etf-compare.svg',
    svg: shell('SMH vs SOXX', '同样买半导体，押注方式不一样', `
      ${chip(120, 315, 270, 250, colors.smh, 'SMH', true)}
      ${chip(510, 315, 270, 250, colors.soxx, 'SOXX', false)}
      ${roundedRect(122, 642, 266, 78, colors.cream2)}
      ${text(255, 692, '更尖：AI 龙头 + 台积电链条', 25, 650, colors.smhDark, 'middle')}
      ${roundedRect(512, 642, 266, 78, colors.cream2)}
      ${text(645, 692, '更平：美国上市半导体篮子', 25, 650, colors.soxxDark, 'middle')}
      ${text(450, 865, '一个更尖，一个更平', 44, 850, colors.ink, 'middle')}
      <path d="M282 798 C362 754, 526 754, 614 798" fill="none" stroke="${colors.ink}" stroke-width="4" stroke-linecap="round" stroke-dasharray="10 12"/>
    `),
  },
  {
    file: '02-content-semiconductor-etf-compare.svg',
    svg: shell('先看基础档案', '费率差异很小，重点看持仓结构', `
      ${roundedRect(72, 230, 360, 620, colors.cream2)}
      ${roundedRect(468, 230, 360, 620, colors.cream2)}
      ${text(252, 300, 'SMH', 50, 850, colors.smhDark, 'middle')}
      ${text(648, 300, 'SOXX', 50, 850, colors.soxxDark, 'middle')}
      ${multiline(112, 392, ['规模：约 55.04B 美元', '费用率：0.35%', '持仓：26 只', '指数：MVIS 半导体 25'], 30, 86, 600)}
      ${multiline(508, 392, ['规模：约 30.42B 美元', '费用率：0.34%', '持仓：30 只', '指数：NYSE 半导体'], 30, 86, 600)}
      ${roundedRect(110, 914, 680, 92, colors.mint)}
      ${text(450, 972, '核心差异不在费率，而在持仓结构', 34, 800, colors.ink, 'middle')}
      ${text(450, 1050, '数据约截至 2026-04-22 / 04-24', 22, 500, colors.muted, 'middle')}
    `),
  },
  {
    file: '03-content-semiconductor-etf-compare.svg',
    svg: shell('真正差异在“押了谁”', '看头部权重，风格就很清楚', `
      ${roundedRect(58, 220, 380, 610, colors.cream2)}
      ${roundedRect(462, 220, 380, 610, colors.cream2)}
      ${text(248, 288, 'SMH：更集中', 36, 850, colors.smhDark, 'middle')}
      ${text(652, 288, 'SOXX：更均衡', 36, 850, colors.soxxDark, 'middle')}
      ${bars(82, 352, [
        {label: 'NVDA', value: 18.32, note: '18.32%'},
        {label: 'TSM', value: 10.9, note: '10.90%'},
        {label: 'AVGO', value: 8.55, note: '8.55%'},
        {label: 'AMD', value: 5.61, note: '5.61%'},
        {label: 'INTC', value: 5.15, note: '5.15%'},
      ], colors.smh, 20)}
      ${bars(486, 352, [
        {label: 'AVGO', value: 8.9, note: '约 5-9%'},
        {label: 'NVDA', value: 8.4, note: '约 5-9%'},
        {label: 'MU', value: 7.6, note: '约 5-9%'},
        {label: 'AMD', value: 6.7, note: '约 5-9%'},
        {label: 'MRVL', value: 5.8, note: '约 5-9%'},
      ], colors.soxx, 20)}
      ${roundedRect(172, 910, 556, 86, colors.lavender)}
      ${text(450, 965, 'SMH 更尖，SOXX 更平', 38, 850, colors.ink, 'middle')}
    `),
  },
  {
    file: '04-content-semiconductor-etf-compare.svg',
    svg: shell('哪只更适合你？', '先看自己的组合里已经有什么', `
      ${roundedRect(82, 248, 736, 164, colors.cream2)}
      ${text(138, 312, '想更集中押 AI 龙头与台积电链条', 32, 700)}
      ${text(738, 366, '更关注 SMH', 34, 850, colors.smhDark, 'end')}
      <path d="M628 356 H510" stroke="${colors.smhDark}" stroke-width="6" stroke-linecap="round"/>
      ${roundedRect(82, 464, 736, 164, colors.cream2)}
      ${text(138, 528, '想要更均衡的半导体行业暴露', 32, 700)}
      ${text(738, 582, '更关注 SOXX', 34, 850, colors.soxxDark, 'end')}
      <path d="M628 572 H510" stroke="${colors.soxxDark}" stroke-width="6" stroke-linecap="round"/>
      ${roundedRect(82, 680, 736, 164, colors.cream2)}
      ${text(138, 744, '已持有大量 NVDA / TSM / AVGO', 32, 700)}
      ${text(738, 798, '注意重叠风险', 34, 850, colors.ink, 'end')}
      <circle cx="156" cy="922" r="34" fill="${colors.smh}" stroke="${colors.ink}" stroke-width="3"/>
      <circle cx="190" cy="922" r="34" fill="${colors.soxx}" stroke="${colors.ink}" stroke-width="3" opacity="0.82"/>
      ${text(450, 936, '选择 ETF 不是只看名字，要看底层押注', 32, 780, colors.ink, 'middle')}
    `),
  },
  {
    file: '05-ending-semiconductor-etf-compare.svg',
    svg: shell('一句话总结', '', `
      ${chip(106, 270, 248, 220, colors.smh, 'SMH', true)}
      ${chip(546, 270, 248, 220, colors.soxx, 'SOXX', false)}
      ${text(450, 626, 'SMH 是“尖刀型”', 48, 850, colors.smhDark, 'middle')}
      ${text(450, 698, 'SOXX 是“均衡型”', 48, 850, colors.soxxDark, 'middle')}
      ${text(450, 800, '先理解押注结构，再谈配置比例', 34, 750, colors.ink, 'middle')}
      ${roundedRect(162, 888, 576, 152, colors.cream2)}
      ${multiline(220, 942, ['行业 ETF 波动大', '持仓会变化', '不是买卖建议'], 28, 42, 650)}
      <path d="M196 934 l14 14 l24 -30 M196 976 l14 14 l24 -30 M196 1018 l14 14 l24 -30" fill="none" stroke="${colors.smhDark}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    `),
  },
];

mkdirSync(outDir, { recursive: true });
for (const card of cards) {
  writeFileSync(join(outDir, card.file), card.svg, 'utf8');
}

console.log(cards.map((card) => card.file).join('\n'));
