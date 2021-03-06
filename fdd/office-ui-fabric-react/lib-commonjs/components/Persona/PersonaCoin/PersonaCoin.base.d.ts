/// <reference types="react" />
import { BaseComponent } from '../../../Utilities';
import { IPersonaCoinProps } from '../Persona.types';
export interface IPersonaState {
    isImageLoaded?: boolean;
    isImageError?: boolean;
}
/**
 * PersonaCoin with no default styles.
 * [Use the `getStyles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Styling)
 */
export declare class PersonaCoinBase extends BaseComponent<IPersonaCoinProps, IPersonaState> {
    static defaultProps: IPersonaCoinProps;
    constructor(props: IPersonaCoinProps);
    componentWillReceiveProps(nextProps: IPersonaCoinProps): void;
    render(): JSX.Element | null;
    private _onRenderCoin;
    /**
     * Deprecation helper for getting text.
     */
    private _getText();
    private _onRenderInitials;
    private _onPhotoLoadingStateChange;
}
