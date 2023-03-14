
import { Form, Input, Select, Checkbox} from 'informed';

import { IndianStates } from '../../constants/StateNameConstants';
import { userDetailsSchema } from './yupSchema';

const SingleStepForm = () => {

    const handleFormSubmit=()=>{
            console.log("Form Submit button is clicked")
    }

    return (
        <div>
            <h1>SingleStepForm</h1>
           
            <Form onSubmit={handleFormSubmit}  yupSchema={userDetailsSchema}  >
                <Input  name='userName' label='Name' />
                <br />
                <br />
                <Input type='number' name='mobileNumber' label='Mobile Number ' />
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

                <Select name='state' label='Native State' >
                    {
                        IndianStates.map((state) => {
                            return <option value={state.key} key={state.key}>{state.name}</option>
                        })
                    }
                </Select>
                <br />
                <br />

                <h4>Receive Updates</h4>
                <Checkbox  name='whatsAppUpdate' label='I want to receive updates directly on WhatsApp' />
                <br />
                <br />
            <button>Submit</button>
            </Form>
        </div>
    )
}
export default SingleStepForm