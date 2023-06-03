import prices from './prices.json'

const range = document.getElementById('range')
const planDescription = document.getElementById('plan-description')
const planValue = document.getElementById('plan-value')
const switchEl = document.getElementById('switch')

function renderPlan() {
  const { description, value } = prices[range.value]
  const finalPrice = switchEl.checked ? value * 12 * 0.75 : value
  planDescription.textContent = `${description} PAGEVIEWS`
  planValue.textContent = `$${finalPrice.toFixed(2)}`
}

function handleRangeChange() {
  range.style.setProperty('--value', `${(range.value / range.max) * 100}%`)
  renderPlan()
}

range.addEventListener('input', handleRangeChange)
switchEl.addEventListener('change', renderPlan)
