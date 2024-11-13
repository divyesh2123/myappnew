import React from 'react'

export default function ChildForm(props) {

    console.log(props);
  return (
    <table>
            {
                props?.myData?.map((j,index)=>{

                    return (<tr>
                        <td>{j}</td>
                        <td><button onClick={()=>{
                            props.deleteInformation(index)
                        }}>DeleteInformation</button></td>
                    </tr>)
                })
            }

    </table>
  )
}
