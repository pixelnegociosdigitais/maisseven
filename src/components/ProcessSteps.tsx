interface Step {
  title: string
  text: string
}

interface ProcessStepsProps {
  title?: string
  steps: Step[]
}

export function ProcessSteps({ title = 'Como trabalhamos', steps }: ProcessStepsProps) {
  return (
    <section className="section section--compact">
      <div className="container">
        <div className="section-heading section-heading--left">
          <span className="eyebrow">MÉTODO +SEVEN</span>
          <h2>{title}</h2>
        </div>
        <div className="process-steps glass-panel">
          {steps.map((step, index) => (
            <div className="process-step" key={step.title}>
              <span className="process-step__number">{String(index + 1).padStart(2, '0')}</span>
              <div><strong>{step.title}</strong><p>{step.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
