import {
    Form,
    Input,
    Multistep,
    useMultistepApi,
    Select
} from 'informed';


const UserDetailForm = () => {

    const { next } = useMultistepApi();
    return (

        <Multistep.Step step="userDetailFrom"  >
            <Input name='userName' label='Name' />
            <br />
            <br />
            <Input name='mobileNumber' label='Mobile Number ' />
            <br />
            <br />
            <Select name='qualification' label='Highest Qualification' >
                <option value='graduationCompleted' > Graduation (Completed) </option>
                <option value='graduationOngoing' >Graduation (Ongoing) </option>
                <option value='postGraduationCompleted' >Post Graduation (Completed) </option>
                <option value='postGraduationOngoing'>Post Graduation (Ongoing)</option>
                <option value='12thDiploma'>12th/Diploma</option>
            </Select>
            <br />
            <br />

            <button onClick={next} >Book My Slot</button>
        </Multistep.Step>
    )
}

const VerifyOtpForm=()=>{
    const { previous } = useMultistepApi();
    return(
        
           <Multistep.Step step="otpVerify" >
            <button onClick={previous}>Go Back</button>
            <br/>
            <br/>
            <Input name='otp' type='number' />
            <button>Verify</button>
           </Multistep.Step>
        
    )
}

const MultiStepForm = () => {
    return (
        <div>
            <h1>MultiStep Form</h1>

            <Form>
                <Multistep>
                    <UserDetailForm />
                    <VerifyOtpForm/>
                </Multistep>
            </Form>

        </div>
    )
}

export default MultiStepForm