const progress = document.getElementById('myProgress')
const progressBar = document.querySelector('.progress-bar')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

// 假设有四个任务，权重分别为 1、2、3、4
const tasks = [
  { id: 1, weight: 1 },
  { id: 2, weight: 2 },
  { id: 3, weight: 3 },
  { id: 4, weight: 4 }
]

let currentTask = 1

update()

prevBtn.addEventListener('click', () => {
  currentTask--
  if (currentTask < 1) {
    currentTask = 1
  }
  update()
})

nextBtn.addEventListener('click', () => {
  currentTask++
  if (currentTask > tasks.length) {
    currentTask = tasks.length
  }
  update()
})

function update() {
  // 计算总权重和已完成权重
  const totalWeight = tasks.reduce((acc, task) => acc + task.weight, 0)
  const completedWeight = tasks.slice(0, currentTask).reduce((acc, task) => acc + task.weight, 0)

  // 计算当前进度百分比
  const currentProgress = (completedWeight / totalWeight) * 100

  // 更新进度条宽度
  progressBar.style.width = currentProgress + '%'

  // 更新 aria-valuenow 属性
  progress.setAttribute('aria-valuenow', currentProgress)

  // 更新按钮状态
  if (currentTask === 1) {
    prevBtn.disabled = true
  } else {
    prevBtn.disabled = false
  }

  if (currentTask === tasks.length) {
    nextBtn.disabled = true
  } else {
    nextBtn.disabled = false
  }
}
