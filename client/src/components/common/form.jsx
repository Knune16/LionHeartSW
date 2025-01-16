import { SelectContent } from "@radix-ui/react-select";
import { Input, } from "../ui/input";
import {Label } from "../ui/label"
import { Select, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";


function CommonForm({formControls, formData, setFormData, onSubmit, buttonText}) {

function renderInputsByComponentType(getControlItem){
    let element = null;
    switch (getControlItem.componentType) {
        case 'input':
            element = (<Input
            name={getControlItem.name}
            placeholder = {getControlItem.placeholder}
            id={getControlItem.id}
            type={getControlItem.type}
            />
            );
            break;

            case 'textarea':
            element = (
                <Textarea
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.id}
                />
            );
            break;

            case 'select':
            element = (
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder = {getControlItem.placeholder}/>
                    </SelectTrigger>
                    <SelectContent>
                        {
                            getControlItem.options &&
                            getControlItem.options.length > 0?
                            getControlItem.options.map(optionItem => <SelectItem key = {optionItem.id} value = {optionItem.id}></SelectItem>)
                            : null
                        }
                    </SelectContent>
                </Select>
            );
            break;

        default:
            element = <Input
            name={getControlItem.name}
            placeholder = {getControlItem.placeholder}
            id={getControlItem.id}
            type={getControlItem.type}
            />
            break;
    }
    return element;
}

    return (
        <Form>
            <div className="flex flex-col gap-3">
                {
                    formControls.map(controlItem => <div className="grid w-full gap-1.5" key={controlItem.name}>
                        <Label className="mb-1">{controlItem.label}</Label>
                        {
                            renderInputsByComponentType(controlItem)
                        }
                    </div>)
                }
            </div>
        </Form>
      );
}

export default CommonForm;
