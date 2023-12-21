import React from 'react'

function PreventDefaultBehaviour() {
  return (
    <div>
        <div>PreventDefaultBehaviour</div>
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submitted, form does not reload page');
        }}>
            <input />
            <button>Send</button>
        </form>
    </div>
  )
}

export default PreventDefaultBehaviour