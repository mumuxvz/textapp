import React from 'react'

function alert(props) {
    const up=(word) =>{
            const low=word.toLowerCase();
            const fir=low.charAt(0).toUpperCase();
            return fir+low.slice(1);
    }
  return (
    props.alert &&<div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{up(props.alert.type)}</strong>{props.alert.mes}

  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
    </div>
  )
}

export default alert