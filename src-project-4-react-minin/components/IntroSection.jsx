import React from 'react'

// export default function IntroSection() {
//   return (
//     <section>
//       <h1 className="centered">Result University</h1>
//       <h3 className="centered" style={{ color: '#666' }}>
//         Университет frontend-разработки, который насыщает IT-сферу
//         квалифицированными программистами
//       </h3>
//     </section>
//   )
// }

const e = React.createElement

export default function IntroSection() {
  return e('section', null, [
    e('h1', { key: 1, className: 'centered' }, 'Result University-createElement'),
    e(
      'h3',
      { className: 'centered', style: { color: '#666' }, key: 2 },
      'Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами'
    ),
  ])
}
