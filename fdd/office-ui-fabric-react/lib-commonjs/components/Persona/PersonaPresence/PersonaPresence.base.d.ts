/// <reference types="react" />
import { BaseComponent } from '../../../Utilities';
import { IPersonaPresenceProps } from '../Persona.types';
/**
 * PersonaPresence with no default styles.
 * [Use the `getStyles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Styling)
 */
export declare class PersonaPresenceBase extends BaseComponent<IPersonaPresenceProps, {}> {
    constructor(props: IPersonaPresenceProps);
    render(): JSX.Element | null;
    private _onRenderIcon;
    private _determineIcon;
}
