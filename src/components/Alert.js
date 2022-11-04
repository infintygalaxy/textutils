import React from 'react'

export default function Alert(Props) {
  return (
    Props.alert && <div class={`alert alert- ${Props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{Props.alert.type}: {Props.alert.msg}</strong>
    
    
  </div>
  )
}
