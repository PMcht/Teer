import { useState } from "react";
import { Switch } from "react-native";

export const Toggle = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (

    <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={'#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
    />  
    )
}