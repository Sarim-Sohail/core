import { ClassAttributes } from 'react';
import type { ComponentType } from 'react';
import { Context } from 'react';
import { CSSObject } from '@emotion/react';
import type { CSSObject as CSSObject_2 } from '@emotion/serialize/dist/declarations/types';
import { DetailedHTMLProps } from 'react';
import { ElementType } from 'react';
import { EmotionCache } from '@emotion/utils';
import { FluentBundle } from '@fluent/bundle';
import { FluentVariable } from '@fluent/bundle';
import type { FluentVariable as FluentVariable_2 } from '@fluent/bundle/esm/bundle';
import type { ForwardedRef } from 'react';
import type { FunctionComponent } from 'react';
import { HTMLAttributes } from 'react';
import { JSX as JSX_2 } from '@emotion/react/jsx-runtime';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { Provider } from 'react';
import type { ReactNode } from 'react';
import { StyledComponent } from '@emotion/styled';
import { Subject } from 'rxjs';
import type { SyntheticEvent } from 'react';
import { Theme } from '@emotion/react';

/**
 * Action Storage.
 * Used for add a new action, store information about it.
 */
export declare type ActionData = {
    /**
     * The unique action key.
     */
    [KeySymbol]?: string;
    /**
     * The action name.
     */
    name: string;
    /**
     * The action type.
     */
    type: ActionType;
    /**
     * The action arguments.
     */
    args?: Arguments;
};

/**
 * Represents the definition of an action.
 */
export declare class ActionDefinition {
    readonly func: Func;
    readonly body?: string | undefined;
    readonly params: ActionParameters;
    /**
     * Creates a new instance of the ActionDefinition class.
     * @param func the function of an action.
     * @param body the source code of the Action.
     * @param params the parameters of the Action.
     */
    constructor(func: Func, body?: string | undefined, params?: ActionParameters);
    /**
     * Creates an action from the function.
     * @param func the function of an action.
     * @param params the parameters of the Action.
     * @returns the new instance of the ActionDefinition class.
     */
    static functionalAction(func: Func, params?: ActionParameters): ActionDefinition;
    /**
     * Creates an action from the source code.
     * @param body the source code of the Action.
     * @param params the parameters of the Action.
     * @returns the new instance of the ActionDefinition class.
     */
    static sourceAction(body: string, params?: ActionParameters): ActionDefinition;
    /**
     * Correctly creates the {@link ActionDefinition} from deserialized data.
     * @param value the deserialized data.
     * @returns the ActionDefinition instance.
     */
    static createFromObject(value: any): ActionDefinition;
}

/**
 * Arguments passed to the event handler.
 */
export declare class ActionEventArgs {
    #private;
    readonly type: string;
    readonly sender: ComponentData;
    readonly store: Store;
    readonly args: any[];
    /**
     * The component properties that were used to render the sender component.
     */
    renderedProps: Record<string, any>;
    /**
     * Creates arguments for the event handler.
     * @param type the event type.
     * @param sender the component that triggered the event.
     * @param store the form viewer settings.
     * @param args the event arguments.
     * @param state the {@link ComponentState} instance.
     */
    constructor(type: string, sender: ComponentData, store: Store, args: any[], state: ComponentState);
    /**
     * Sets user-defined properties for the React component that override other properties of the component.
     * @param props the component properties.
     */
    setUserDefinedProps: (props?: Record<string, any>) => void;
    /**
     * @returns the event handled by the event handler.
     */
    get event(): SyntheticEvent | null;
    /**
     * @returns the first element of the event argument array, which is treated as a value.
     */
    get value(): any;
    /**
     * @returns the object for reading and changing form data.
     */
    get data(): Record<string, unknown>;
}

/**
 * Description of the event argument type for the code editor.
 */
export declare const ActionEventArgsDeclaration = "\n/**\n * Arguments passed to the event handler.\n */\ndeclare class ActionEventArgs {\n\n  /**\n   * The event type.\n   */\n  readonly type: string\n\n  /**\n   * The component that triggered the event.\n   */\n  readonly sender: ComponentData\n  \n  /**\n   * The component properties that were used to render the sender component.\n   */\n  readonly renderedProps: Record<string, any>\n  \n  /**\n   * Sets current props of component.\n   */\n  readonly setUserDefinedProps: (props: Record<string, any>) => void\n\n  /**\n   * The form viewer settings.\n   */\n  readonly store: Store\n\n  /**\n   * The event arguments.\n   */\n  readonly args: any[]\n\n  /**\n   * @returns the event handled by the event handler.\n   */\n  get event(): SyntheticEvent | null\n\n  /**\n   * @returns the first element of the event argument array, which is treated as a value.\n   */\n  get value(): any\n  \n  /**\n   * @returns the object for reading and changing form data.\n   */\n  get data(): Record<string, unknown>\n}\n";

/**
 * Event handler function type.
 * @param e the action arguments.
 */
export declare type ActionEventHandler = (e: ActionEventArgs) => void | Promise<void>;

/**
 * Action function type.
 * @param e the action arguments.
 * @param params the action parameters.
 * @template T the type of action parameters.
 */
export declare type ActionHandler<T> = (e: ActionEventArgs, params: {
    [k in keyof T]: any;
}) => void | Promise<void>;

/**
 * Represents a set of action parameters.
 */
export declare type ActionParameters = Record<ParameterName, ParameterType>;

/**
 * The type of function that initializes an actions on a component. **Internal use only.**
 * @param props the component's property settings.
 * @param def the helper to create an action event handler.
 * @returns the Record with action event handlers.
 */
export declare type ActionsInitializer = (props: ComponentStore['props'], def: DefineActionHelper) => Record<EventName, ActionEventHandler | ActionDefinition>;

/**
 * Action type.
 */
export declare type ActionType = 'common' | 'code' | 'custom';

/**
 * Represents a set of action definitions.
 */
export declare type ActionValues = Record<string, ActionDefinition>;

/**
 * Basic metadata class for a React component property for the form builder.
 */
export declare class Annotation {
    /**
     * The component property key.
     */
    readonly key: string;
    /**
     * The component property name.
     */
    readonly name: string;
    /**
     * The name of the component's property editor.
     */
    readonly editor: EditorType;
    /**
     * The hint for the component property.
     */
    readonly hint?: ReactNode;
    /**
     * True if the property value can be localized, false otherwise.
     */
    readonly localizable: boolean;
    /**
     * True if the property value is bound to form data, false otherwise.
     */
    readonly valued: boolean;
    /**
     * Additional properties for the component property editor.
     */
    readonly editorProps?: any;
    /**
     * The default property value.
     */
    readonly default?: any;
    /**
     * The data type for the value of the property.
     */
    readonly type?: SchemaType;
    /**
     * True if the component property is required, false otherwise.
     */
    readonly required: boolean;
    /**
     * The function for validating the property value.
     */
    readonly validator?: RuleValidator;
    /**
     * Message and/or error code for the validation function.
     */
    readonly errorMap?: ErrorMap;
    /**
     * True if the property value can be a calculated property, false otherwise.
     */
    readonly calculable: boolean;
    /**
     * A function that returns a string containing the source code of the function to bind child components.
     * @param props the properties of the component, which are available only inside Form Builder Designer.
     */
    readonly slotConditionBuilder?: (props: any) => string;
    /**
     * Creates metadata for a React component property.
     * @param key the property name.
     * @param name the human-readable property name.
     */
    constructor(key: string, name: string);
    /**
     * @returns the metadata clone.
     */
    clone(): any;
}

/**
 * The builder class to define the metadata property of the form builder component.
 * @template T the property type.
 */
export declare class AnnotationBuilder<T> extends BaseBuilder<T> {
    /**
     * Creates a component property metadata builder.
     * @param editor the property editor type.
     * @template T the property type.
     */
    constructor(editor: EditorType);
    /**
     * Creates a component property metadata builder.
     * @param editor the property editor type.
     * @template T the property type.
     * @returns the component property metadata builder.
     */
    static create: <T_1>(editor: EditorType) => AnnotationBuilder<T_1>;
    /**
     * Sets the property as a "array" property.
     * @returns the instance of the metadata property builder.
     */
    get array(): ArrayBuilder<T[] | undefined>;
    /**
     * Sets the field type for the component property.
     * @param type the field type.
     * @returns the instance of the metadata property builder.
     */
    typed<T extends SchemaType>(type: T): TypedBuilder<SchemaTypeMap[T] | undefined>;
    /**
     * Sets the property as a "single select" property.
     * @param values the possible values for the property.
     * @returns the instance of the metadata property builder.
     */
    oneOf<U extends string | number>(...values: U[]): OneOfBuilder<U>;
    /**
     * Sets the property as a "multiple select" property.
     * @param values the possible values for the property.
     * @returns the instance of the metadata property builder.
     */
    someOf<U extends string | number>(...values: U[]): SomeOfBuilder<U>;
}

/**
 * The type-safe description of the component's metadata property builders.
 * @template T the component property name type.
 */
export declare type Annotations<T extends object> = {
    [key in keyof T]: BaseBuilder<T[key]> | undefined;
};

/**
 * Type of component property description in the form builder.
 */
export declare type AnnotationType = 'Property' | 'Container' | 'Event' | 'Module' | 'Style';

/**
 * It will be transformed in arguments before passing in action.
 */
export declare type Arguments = Record<ParameterName, ArgumentValue>;

/**
 * The type of the argument value of the function.
 */
export declare type ArgumentValue = string | number | boolean;

/**
 * The annotation builder for a component property with type 'Array'.
 */
export declare const array: ArrayBuilder<unknown[] | undefined>;

/**
 * The builder class to define the metadata property of the form builder component.
 * Used for properties where the property value is an array.
 * @template T the property type.
 */
export declare class ArrayBuilder<T> extends TypedBuilder<T> {
    subType?: SchemaType;
    /**
     * Sets the component's value type to an array of strings.
     * @returns the modified instance of the builder.
     */
    get ofString(): ArrayBuilder<string[] | undefined>;
    /**
     * Sets the component's value type to an array of objects.
     * @returns the modified instance of the builder.
     */
    get ofObject(): ArrayBuilder<object[] | undefined>;
}

/**
 * Asynchronous function constructor.
 */
export declare const AsyncFunction: Function;

/**
 * The base builder class to define the metadata property of the form builder component.
 * @template T the property type.
 */
export declare class BaseBuilder<T> {
    /**
     * Partial metadata for a component property.
     */
    annotation: PreAnnotation;
    /**
     * Options for building an annotation.
     */
    options: BuilderOptions;
    /**
     * @returns the main component property that is used as form data and for validation rules.
     */
    get valued(): this;
    /**
     * @returns the component property that can be localized.
     */
    get localize(): this;
    /**
     * @returns the non-localizable component property.
     */
    get notLocalize(): this;
    /**
     * Specifies the name of the component property.
     * @param name the property name.
     * @returns the modified instance of the builder.
     */
    named(name: string): this;
    /**
     * Adds the hint to the property name of the component.
     * @param hint the hint.
     * @returns the modified instance of the builder.
     */
    hinted(hint: ReactNode): this;
    /**
     * Marks the component property as calculable.
     * @param calculable true if the property is calculable.
     * @returns the modified instance of the builder.
     */
    calculable(calculable: boolean): this;
    /**
     * Modifies the component property metadata builder with custom options.
     * @param options the custom options.
     * @returns the modified instance of the builder.
     */
    setup(options: BuilderSetup): this;
    /**
     * Clones the instance of the builder.
     * @returns the cloned instance of the builder.
     */
    clone(): this;
    /**
     * Creates component property metadata for the form builder.
     * @param key the unique key of the component property.
     * @returns the instance of the component property metadata for the form builder.
     */
    build(key: string): Annotation;
    /**
     * Sets custom properties for the component's property editor.
     * @param props the custom properties
     * @returns the modified instance of the builder.
     */
    withEditorProps(props: any): this;
    /**
     * Returns the annotation name.
     * @param key the property name
     * @returns the annotation name.
     */
    protected getName(key: string): string;
}

/**
 * The result of compiling of anything. **Internal use only.**
 */
export declare interface BaseCompilationResult {
    /**
     * Flag if true - compilation failed, false otherwise.
     */
    error: boolean;
    /**
     * The array of compilation errors.
     */
    exceptions?: Error[];
}

/**
 * The enumeration of bidirectional text layout types.
 */
export declare enum BiDi {
    /**
     * Left to right.
     */
    LTR = "ltr",
    /**
     * Right to left.
     */
    RTL = "rtl"
}

/**
 * The annotation builder for a component property with type 'boolean'.
 */
export declare const boolean: TypedBuilder<boolean | undefined>;

/**
 * Value validation rules.
 */
export declare type BoundValueSchema = {
    /**
     * Flag, if true then automatic validation of the value works, false otherwise.
     */
    autoValidate?: boolean;
    /**
     * The array of validation rule settings.
     */
    validations?: ValidationRuleSettings[];
};

/**
 * Description of the React component that connects to the form builder.
 * Contains metadata for the form builder and metadata for the form viewer.
 */
export declare interface BuilderComponent {
    /**
     * The component metadata for the form builder.
     */
    readonly meta: Meta;
    /**
     * The component metadata for the form viewer.
     */
    readonly model: Model;
    /**
     * The name of the component category in the designer.
     */
    readonly category?: string;
}

/**
 * Options for building an annotation.
 */
export declare class BuilderOptions {
    /**
     * Type of component property description in the form builder.
     */
    annotationType: AnnotationType;
    /**
     * Flag if true, the property name will be automatically converted in the designer from a camel case string to a human-readable string.
     */
    autoName: boolean;
}

/**
 * The type representing custom options for the component's property metadata builder.
 */
export declare type BuilderSetup = Partial<PreAnnotation & BuilderOptions>;

/**
 * Represents all the metadata of the form builder components.
 */
export declare class BuilderView extends View {
    #private;
    builderComponents: BuilderComponent[];
    /**
     * Returns the component metadata for the specified component type name.
     * @param type the component type name.
     * @returns the component metadata for the specified component type name.
     */
    getMeta(type: string): Meta;
    /**
     * Returns the component metadata for the specified component type name or undefined.
     * @param type the component type name.
     * @returns the component metadata for the specified component type name or undefined.
     */
    findMeta(type: string): Meta | undefined;
    /**
     * Returns the array of metadata properties of the tooltip component.
     * @param name the name of the tooltip component type.
     * @returns the array of metadata properties of the tooltip component.
     */
    getTooltipAnnotations(name: string): Annotation[] | undefined;
    /**
     * Returns the array of metadata properties of the error component.
     * @param name the name of the error component type.
     * @returns the array of metadata properties of the error component.
     */
    getErrorAnnotations(name: string): Annotation[] | undefined;
    /**
     * @returns the array of strings with the names of the component types of the tooltip.
     */
    get tooltips(): string[];
    /**
     * @returns the array of strings with the names of the component types of the error.
     */
    get errors(): string[];
    /**
     * Sets the metadata of the component that displays the form's tooltips.
     * @param builderComponent the metadata of the component that displays the form's tooltips.
     * @returns the instance of the {@link BuilderView} class.
     */
    withTooltipMeta(builderComponent: BuilderComponent): this;
    /**
     * Sets the metadata of the component that displays form's errors.
     * @param builderComponent the metadata of the component that displays the form's errors.
     * @returns the instance of the {@link BuilderView} class.
     */
    withErrorMeta(builderComponent: BuilderComponent): this;
    /**
     * Creates metadata for the form builder for templates from the specified template names.
     * @param templates the array of template names.
     * @returns the instance of the {@link BuilderView} class.
     */
    withTemplates(templates: string[]): this;
    /**
     * Creates an instance of BuilderComponent for the specified template name.
     * @param name the template name
     * @returns the BuilderComponent instance.
     */
    static createTemplateComponent(name: string): BuilderComponent;
    /**
     * Creates metadata for form builder components.
     * @param builderComponents the array of metadata of form builder components.
     */
    constructor(builderComponents: BuilderComponent[]);
}

/**
 * Calculable result.
 */
export declare class CalculableResult {
    readonly error: boolean;
    readonly result?: any;
    readonly exceptions?: Error[] | undefined;
    /**
     * Constructor.
     * @param error the error.
     * @param result the result.
     * @param exceptions the exceptions.
     */
    constructor(error?: boolean, result?: any, exceptions?: Error[] | undefined);
    /**
     * Creates a new instance of the CalculableResult class with a successful result.
     * @param result the calculable result.
     * @returns the new instance of CalculableResult class.
     */
    static success(result: any): CalculableResult;
    /**
     * Creates a new instance of CalculableResult class with an error.
     * @param exceptions the exception array.
     * @returns the new instance of CalculableResult class.
     */
    static error(exceptions: Error[]): CalculableResult;
}

/* Excluded from this release type: calculatePropertyValue */

/**
 * Performs the function of checking if the child component can be bound. **Internal use only.**
 * @param childStore the child component settings.
 * @param parentProps the parent component properties.
 * @returns true, if the child component can be bound, false otherwise.
 */
export declare function checkSlotCondition(childStore: ComponentStore, parentProps: any): any;

/**
 * The annotation builder for the component property containing the CSS class name.
 */
export declare const className: Annotation;

/**
 * The annotation builder for a component property with type 'color' (e.g. rgba(71, 167, 122, 0.72)).
 */
export declare const color: TypedBuilder<string | undefined>;

/**
 * The annotations for generic CSS properties of a component.
 */
export declare const commonStyles: {
    width: AnnotationBuilder<unknown>;
    height: AnnotationBuilder<unknown>;
    marginTop: AnnotationBuilder<unknown>;
    marginRight: AnnotationBuilder<unknown>;
    marginBottom: AnnotationBuilder<unknown>;
    marginLeft: AnnotationBuilder<unknown>;
    color: AnnotationBuilder<unknown>;
    backgroundColor: AnnotationBuilder<unknown>;
};

/**
 * This tree of elements contains the data required to display the component. It is synchronized with the ComponentStore tree.
 */
export declare class ComponentData implements IFormData {
    #private;
    private _state;
    /**
     * The unique identifier.
     */
    readonly id: string;
    /**
     * The component settings.
     */
    readonly store: ComponentStore;
    /**
     * The component metadata.
     */
    readonly model: Model;
    /**
     * The field with the form data.
     */
    readonly field?: Field;
    /**
     * The parent node in the component data tree.
     */
    parent?: ComponentData;
    /**
     * The child nodes in the component data tree.
     */
    children: ComponentData[];
    /**
     * User defined properties of the React component.
     */
    userDefinedProps?: Record<string, any>;
    /**
     * If true, then validation is in progress.
     */
    validating: boolean;
    /**
     * Constructor.
     * @param componentStore the component settings.
     * @param model the component metadata for the form viewer.
     * @param field the field with the form data.
     * @param childFactory the factory function that creates {@link ComponentData} instance.
     * @param formValidators the array of functions that validate the form data.
     */
    constructor(componentStore: ComponentStore, model: Model, field: Field | undefined, childFactory: (componentStore: ComponentStore) => ComponentData, formValidators?: FormValidators);
    /**
     * Sets the new parent for this node.
     * @param newParent the new parent.
     */
    setParent(newParent: ComponentData): void;
    /**
     * Inserts the given node after this node.
     * @param inserted the node to insert.
     */
    insertAfterMe(inserted: ComponentData): void;
    /**
     * Inserts the given node before this node.
     * @param inserted the node to insert.
     */
    insertBeforeMe(inserted: ComponentData): void;
    /**
     * @inheritDoc
     */
    get state(): Record<string, unknown>;
    /**
     * @returns the key of this node (same as the key of the ComponentStore).
     */
    get key(): string;
    /**
     * @returns the ComponentDataEvents object.
     */
    get events(): ComponentDataEvents;
    /**
     * Find the node with the given key.
     * @param key the key to find.
     * @returns the node or undefined if not found.
     */
    findByKey(key: string): ComponentData | undefined;
    /**
     * Assigns unique keys to the items in the tree.
     * @param root the root of the tree to unify keys. Defaults to the root of this tree.
     * @returns the map of new keys to old keys.
     */
    unifyKeys(root: ComponentData): Map<string, string>;
    /**
     * @returns all the fields in the tree as a map. Starts from this node.
     */
    get fields(): Map<string, Field>;
    /**
     * Deletes this node from the tree.
     */
    delete(): void;
    /**
     * @inheritDoc
     */
    get data(): Record<string, unknown>;
    /**
     * @returns all the form data that is of the FluentVariable type.
     * Additionally, the keys of the returned object are converted to the snake case.
     */
    get fluentData(): Record<string, FluentVariable>;
    /**
     * @inheritDoc
     */
    get errors(): Record<string, unknown>;
    /**
     * @inheritDoc
     */
    get hasErrors(): boolean;
    /**
     * @inheritDoc
     */
    setAllErrors(message?: string): void;
    /**
     * @inheritDoc
     */
    validate(): Promise<void>;
    /**
     * @inheritDoc
     */
    getValidationResult(): Promise<undefined>;
    /**
     * @inheritDoc
     */
    get isValidating(): boolean;
    /**
     * @inheritDoc
     */
    reset(): void;
    /**
     * @inheritDoc
     */
    clear(): void;
    /**
     * Dispose method that releases resources used by the object.
     * It disposes the field and all the children objects.
     */
    dispose(): void;
    /**
     * @returns true if it has no parent {@link ComponentData}, false otherwise.
     */
    get isRoot(): boolean;
    private insert;
    /**
     * Disposes the nodes by calling the disposers, disposing the field,
     * and resetting the parent and children properties to undefined and an empty array, respectively.
     * @param nodes the array of ComponentData objects representing the nodes to dispose.
     */
    private disposeNodes;
    private collectAllNodesAsArray;
    private collectAllFields;
    private addChild;
    private removeChild;
    private invokeOnAfterKeyChanged;
    private invokeOnBeforeDeleted;
}

/**
 * Represents a class that holds events related to component data.
 */
export declare class ComponentDataEvents {
    /**
     * An event that occurs after a component key change.
     */
    readonly onAfterKeyChanged: SyncEvent<ComponentData, ComponentKeyChangedEventArgs>;
    /**
     * An event that occurs before a component is removed from the component tree.
     */
    readonly onBeforeDelete: SyncEvent<ComponentData, undefined>;
    /**
     * Unsubscribe from all events.
     */
    dispose(): void;
}

/**
 * Context provider for the useComponentData hook. **Internal use only.**
 */
export declare const 
/**
* @returns the instance of the ComponentData of the currently rendered component.
*/
/**
 * Context provider for the useComponentData hook. **Internal use only.**
 */
ComponentDataProvider: Provider<ComponentData>;

/**
 * The component key.
 */
export declare type ComponentKey = string;

/**
 * Represents the event argument for the event when the component key changes.
 */
export declare class ComponentKeyChangedEventArgs {
    readonly oldKey: string;
    readonly newKey: string;
    /**
     * Constructs a new instance of the ComponentKeyChangedEventArgs class.
     * @param oldKey the old key.
     * @param newKey the new key.
     */
    constructor(oldKey: string, newKey: string);
}

/**
 * The component kind type.
 */
export declare type ComponentKind = 'container' | 'component' | 'slot' | 'template';

/**
 * The function to localize the properties of a component.
 * @param componentStore the component settings.
 * @param language the language selected in the form viewer.
 * @returns the Record with the localized properties of a component.
 */
export declare type ComponentLocalizer = (componentStore: ComponentStore, language: Language) => Record<string, any>;

/**
 * The value of the component property.
 */
export declare interface ComponentProperty {
    /**
     * The simple value of a component property.
     */
    value?: any;
    /**
     * Source code of the function for calculating the value of a component property.
     */
    fnSource?: string;
    /**
     * Type of the component's calculated property. If not specified - the value from value is used.
     */
    computeType?: ComponentPropertyComputeType;
}

/**
 * The component property value type.
 */
export declare type ComponentPropertyComputeType = 'function' | 'localization';

/**
 * The component property name.
 */
export declare type ComponentPropertyName = string;

/**
 * A record containing localizations for the component properties.
 */
export declare type ComponentPropsLocalization = Record<ComponentPropertyName, string>;

/**
 * A record containing localizations grouped by component key.
 */
export declare type ComponentsLocalization = Record<ComponentKey, TypedLocalization>;

/**
 * Calculates all the properties of the form view component.
 */
export declare class ComponentState {
    readonly data: ComponentData;
    readonly store: Store;
    readonly localizer: (componentStore: ComponentStore) => Record<string, any>;
    readonly computeChildren: ComputeChildren;
    /**
     * Creates an instance that calculates the properties of the form viewer component.
     * @param data the data needed to display the component.
     * @param store the form viewer settings.
     * @param localizer the function to localize the properties of a component, returns a Record with localized properties.
     * @param computeChildren the function that calculates all child properties of a component.
     */
    constructor(data: ComponentData, store: Store, localizer: (componentStore: ComponentStore) => Record<string, any>, computeChildren: ComputeChildren);
    /**
     * @returns combined in order of priority component properties.
     */
    get get(): Record<string, any>;
    /**
     * @returns the combined properties of the components in priority order, excluding child components.
     */
    get propsWithoutChildren(): Record<string, any>;
    /**
     * @returns the component's field value data, if the component can have a field value.
     */
    get value(): {
        [x: string]: unknown;
    } | undefined;
    /**
     * @returns the values for all properties of the component, calculates the values of the calculated properties.
     */
    get calculatedProps(): Record<string, any>;
    /**
     * @returns component localized properties.
     */
    get localizedProps(): Record<string, any>;
    /**
     * @returns the component event handlers that send events to the event bus.
     */
    get events(): Record<string, Function>;
    /**
     * Calculates and returns className property.
     * @returns the Record that contains the className property for the component.
     */
    get className(): {
        className: string;
    };
    /**
     * Calculates and returns wrapper className property.
     * @returns the Record that contains the className property for the wrapper of component.
     */
    get wrapperClassName(): string;
    /**
     * @returns all arbitrary HTML attributes of the component.
     */
    get htmlAttributes(): HtmlAttribute | undefined;
    /**
     * Calculates and returns all child components.
     * @param props the React component properties.
     * @returns the Record that contains the child components of a component.
     */
    children(props: any): Record<string, any>;
    private getClassNameFromCssPart;
}

/**
 * Component settings for serialization in JSON.
 */
export declare class ComponentStore {
    /**
     * The React component key.
     */
    key: string;
    /**
     * The component type of the form viewer.
     */
    type: string;
    /**
     * The component properties.
     */
    props: Record<string, ComponentProperty>;
    /**
     * The component CSS styles.
     */
    css?: Css;
    /**
     * The component wrapper CSS styles.
     */
    wrapperCss?: Css;
    /**
     * The set of event handlers.
     */
    events?: Record<EventName, ActionData[]>;
    /**
     * The array of child components.
     */
    children?: ComponentStore[];
    /**
     * The component value validation settings.
     */
    schema?: BoundValueSchema;
    /**
     * The set of arbitrary HTML attributes added to the component.
     */
    htmlAttributes?: HtmlAttribute[];
    /**
     * The tooltip settings.
     */
    tooltipProps?: Record<string, ComponentProperty>;
    /**
     * The name of the occupied component property in the parent component.
     */
    slot?: string;
    /**
     * The condition for binding a child element to a parent element.
     */
    slotCondition?: string;
    /**
     * The expression or function to conditionally render a component.
     */
    renderWhen?: ComponentProperty;
    /**
     * Creates the component settings.
     * @param key the React component key.
     * @param type the component type of the form viewer.
     */
    constructor(key: string, type: string);
    /**
     * Correctly creates the {@link ComponentStore} from deserialized data.
     * @param value the deserialized data.
     * @returns the component Store.
     */
    static createFromObject(value: any): any;
    /**
     * Adds the event handler for component.
     * @param store the target {@link ComponentStore}.
     * @param eventName the target event name.
     * @param data the {@link ActionData}.
     */
    static addEventHandler(store: ComponentStore, eventName: string, data: ActionData): void;
}

export declare const ComponentTree: ({ data }: ComponentTreeProps) => JSX_2.Element;

/**
 * Properties of a form component tree element.
 */
export declare interface ComponentTreeProps {
    /**
     * An array of child elements of the tree.
     */
    data: ComponentData[];
}

/**
 * Function that calculates all child properties of a component. **Internal use only.**
 * @param componentData the data required to display a component.
 * @param componentProps the calculated properties of the component.
 * @returns the Record with calculated child properties.
 */
export declare type ComputeChildren = (componentData: ComponentData, componentProps: Record<string, any>) => Record<string, any>;

/**
 * Metadata for the component container property for the form builder.
 * The Container property of a component can contain other React components.
 */
export declare class ContainerAnnotation extends Annotation {
}

/**
 * The annotations for generic CSS properties of a container component.
 */
export declare const containerStyles: {
    flexDirection: OneOfBuilder<"column" | "row" | "column-reverse" | "row-reverse">;
    gap: TypedBuilder<string | undefined>;
    alignItems: OneOfBuilder<"start" | "center" | "baseline" | "end" | "stretch">;
    justifyContent: OneOfBuilder<"left" | "right" | "start" | "center" | "end" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly">;
    flexWrap: OneOfBuilder<"wrap" | "nowrap" | "wrap-reverse">;
};

/**
 * Converts the input object to an ActionValues object. **Internal use only.**
 * @param obj the input object.
 * @returns the converted ActionValues object.
 */
export declare const createActionValuesFromObject: (obj: any) => ActionValues;

export declare const createAnnotation: <T>(editor: string) => AnnotationBuilder<T>;

/**
 * Creates non-nullable React context. **Internal use only.**
 * @param name the context name.
 * @returns the tuple [hook, provider, and common context] for interactions with a non-nullable context.
 */
export declare function createNonNullableContext<T>(name: string): [() => T, Provider<T>, Context<T | null>];

/**
 * Creates an instance of the builder class to define the property's metadata.
 * @param editor editor type for editing the property.
 * @returns the instance of the builder class to define the property's metadata.
 */
export declare function createProperty(editor: FirstParameter<typeof createAnnotation>): AnnotationBuilder<unknown>;

export declare const createView: typeof View.create;

/**
 * The type for the CSS property of a React component.
 */
export declare type Css = {
    /**
     * CSS styles for arbitrary device.
     */
    any?: DeviceStyle;
    /**
     * CSS styles for mobile devices.
     */
    mobile?: DeviceStyle;
    /**
     * CSS styles for tablet devices.
     */
    tablet?: DeviceStyle;
    /**
     * CSS styles for desktop devices.
     */
    desktop?: DeviceStyle;
};

/**
 * Represents the type of CSS loader. Can be either BiDi or common for both BiDi.
 */
export declare type CssLoaderType = BiDi | 'common';

/**
 * The part of the CSS properties of a component.
 */
export declare type CssPart = 'css' | 'wrapperCss';

/**
 * Custom actions for the form viewer.
 */
export declare type CustomActions = Record<string, ActionDefinition | ActionEventHandler>;

/**
 * A set of metadata of custom validation rules, grouped by rule name.
 */
export declare type CustomValidationRules = Record<string, CustomValidationRuleSettings>;

/**
 * Custom validation rule settings.
 */
export declare type CustomValidationRuleSettings = {
    /**
     * Metadata of validation rule parameters.
     */
    params?: ValidationRuleParameter[];
    /**
     * The function that validates the value.
     */
    validate: RuleValidator;
};

/**
 * Binds all parts of the validation and performs the validation.
 */
export declare class DataValidator {
    #private;
    private constructor();
    /**
     * Creates a DataValidator instance.
     * @param store the form viewer settings
     * @param resolver the validation function factory.
     * @param args the validation function factory arguments.
     * @param setter the callback function called to set a validation error.
     * @param localizer the function that localizes validation error messages.
     * @template T the validation function factory arguments.
     * @returns the DataValidator instance.
     */
    static create: <T>(store: IStore, resolver: SchemaResolver<T>, args: T, setter: Setter<string | undefined>, localizer?: ErrorMessageLocalizer) => DataValidator;
    /**
     * Generates an event to perform validation.
     * @param value the validated value.
     */
    sendValidationEvent: (value: any) => void;
    /**
     * Performs a validation of the value.
     * @param value the validated value.
     * @returns the Promise with the result of the validation.
     */
    validate: (value: any) => Promise<string | undefined>;
    /**
     * Returns the validation results without triggering an events and changing the state of the form.
     * @param value the validated value.
     * @returns the validation results.
     */
    getValidationResult: (value: any) => Promise<ValidationResult[] | undefined>;
    /**
     * Releases allocated resources, must be used when destroying an object instance.
     */
    dispose: () => void;
}

/**
 * The annotation builder for a component property with type 'Date'.
 */
export declare const date: TypedBuilder<Date | undefined>;

/**
 * The React component that wraps every component in a form.
 */
export declare const DefaultWrapper: StyledComponent<{
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
}, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

export declare const define: typeof Definer.define;

/**
 * The defineAction helper type. **Internal use only.**
 * @param name the action name.
 * @param func the action handler.
 * @param params the definition of action parameters.
 * @param description the action description.
 * @template T the type of action parameter.
 * @returns the definition of an action.
 */
export declare type DefineActionHelper = <T>(name: string, func: ActionHandler<T>, params?: ParameterDefinition<T>[], description?: string) => ActionDefinition;

/**
 * The builder class to define the metadata of the form builder component.
 * @template T React component property type.
 */
export declare class Definer<T extends object> {
    #private;
    /**
     * Definer class data.
     * @template T React component property type.
     */
    data: DefinerData<T>;
    /**
     * Static method to create an instance of the component's metadata builder class.
     * @param component the React component.
     * @param displayName the display name for the anonymous component.
     * @returns the instance of the {@link Definer} class.
     */
    static define<T extends object>(component: ComponentType<T>, displayName?: string): Definer<T>;
    private constructor();
    /**
     * Sets the name of the component.
     * @param name the component name.
     * @returns the modified Definer class instance.
     */
    name: (name: string) => Definer<T>;
    /**
     * Sets the kind of the component.
     * @param kind the component kind.
     * @returns the modified Definer class instance.
     */
    kind: (kind: ComponentKind) => Definer<T>;
    /**
     * Sets the icon of the component.
     * @param icon the component icon.
     * @returns the modified Definer class instance.
     */
    icon: (icon: ComponentType) => Definer<T>;
    /**
     * Sets the category of the component.
     * @param category the component category.
     * @returns the modified Definer class instance.
     */
    category: (category: string) => Definer<T>;
    /**
     * Sets the type of the component.
     * @param type the component type.
     * @returns the modified Definer class instance.
     */
    type: (type: string) => this;
    /**
     * Sets the metadata of the component's properties.
     * @param properties the metadata of the component's properties.
     * @returns the modified Definer class instance.
     */
    props: (properties: Annotations<T>) => Definer<T>;
    /**
     * Sets the component CSS metadata.
     * @param css the component CSS metadata.
     * @returns the modified Definer class instance.
     */
    css: (css: Annotations<CSSObject_2>) => Definer<T>;
    /**
     * Adds the metadata of the component's actions. **Internal use only.**
     * @param fn the function that initializes an actions on a component.
     * @returns the modified Definer class instance.
     */
    actions: (fn: ActionsInitializer) => Definer<T>;
    /**
     * Adds the custom component to be displayed in the component list. **Internal use only.**
     * @param customPreview the custom component.
     * @returns the modified Definer class instance.
     */
    preview: (customPreview: ReactNode) => Definer<T>;
    /**
     * @returns the component type name.
     */
    getType(): string;
    /**
     * Creates component metadata for the form builder and form viewer.
     * @returns component metadata for the form builder and form viewer.
     */
    build(): BuilderComponent;
}

/**
 * Definer class data.
 * @template T React component property type.
 */
export declare type DefinerData<T extends object> = {
    /**
     * The React component.
     */
    readonly component: ComponentType<T>;
    /**
     * The component name.
     */
    name?: string;
    /**
     * The component kind.
     */
    kind?: ComponentKind;
    /**
     * The component category.
     */
    category?: string;
    /**
     * The CSS metadata.
     */
    cssObject?: Annotations<CSSObject_2>;
    /**
     * The component icon.
     */
    icon?: ComponentType;
    /**
     * The function that initializes an actions on a component (for internal use only).
     */
    readonly actionsInitializer?: ActionsInitializer;
    /**
     * The property metadata.
     */
    properties?: Annotations<T>;
    /**
     * The custom component to display in the component list (unused).
     */
    customPreview?: ReactNode;
};

/**
 * CSS styles for a device.
 */
export declare type DeviceStyle = {
    /**
     * CSS styles defined in the general style settings.
     */
    object?: CSSObject;
    /**
     * CSS styles defined in the style code editor.
     */
    string?: string;
};

/**
 * The DidMountEvent event name.
 */
export declare const DidMountEvent = "onDidMount";

/**
 * Type for the function that disposes resources.
 */
export declare type Disposer = () => void;

/**
 * A type that denotes the name of the property editor.
 */
export declare type EditorType = string;

/**
 * The CSS style cache. **Internal use only.**
 */
export declare const emotionCache: {
    LTR: EmotionCache;
    RTL: EmotionCache;
};

/**
 * The empty component settings object. **Internal use only.**
 */
export declare const emptyComponentStore: ComponentStore;

/**
 * The result of validating a component property in the form builder.
 */
export declare type ErrorMap = {
    /**
     * The validation code.
     */
    code?: string;
    /**
     * The validation message.
     */
    message?: string;
};

/**
 * A function that localizes validation error messages.
 * @param value the results of the validation.
 * @returns the localization result or undefined.
 */
export declare type ErrorMessageLocalizer = (value: ValidationResult[] | undefined) => string | undefined;

/**
 * The component metadata for error message. **Internal use only.**
 */
export declare const errorMessageModel: Model<ErrorWrapperProps>;

/**
 * Properties of the React component that wraps the form view component and displays validation errors.
 */
export declare interface ErrorWrapperProps {
    /**
     * The error text.
     */
    error?: string;
    /**
     * The wrapped component.
     */
    children?: ReactNode;
    /**
     * The CSS class name.
     */
    className?: string;
}

/**
 * The annotation builder for a component property with type 'event' (or event handler, or just a function).
 */
declare const event_2: AnnotationBuilder<Function>;
export { event_2 as event }

/**
 * Metadata for the component event property for the form builder.
 */
export declare class EventAnnotation extends Annotation {
}

/**
 * The type for the event name.
 */
export declare type EventName = string;

/**
 * The event stream of the form viewer.
 */
export declare class EventStream {
    private readonly stream;
    /**
     * Creates the event stream of the form viewer.
     * @param stream the set of observable events.
     */
    constructor(stream: Observable<ActionEventArgs>);
    /**
     * Returns the event stream filtered by the specified predicate function.
     * @param predicate the predicate function.
     * @returns the event stream filtered by the specified predicate function.
     */
    filter(predicate: (args: ActionEventArgs) => boolean): EventStream;
    /**
     * Returns the event stream filtered by the specified sender keys.
     * @param keys the sender key array.
     * @returns the event stream filtered by the specified sender keys.
     */
    keys(...keys: string[]): EventStream;
    /**
     * Returns the event stream filtered by the specified event types.
     * @param types the array of event types.
     * @returns the event stream filtered by the specified event types.
     */
    types(...types: string[]): EventStream;
    /**
     * Adds the subscriber to the stream of observed events.
     * @param next the subscriber function.
     */
    listen(next: (value: ActionEventArgs) => void): () => void;
    /**
     * Adds the specified observer to the stream of observed events.
     * @param observer the observer.
     */
    listen(observer: Partial<Observer<ActionEventArgs>>): () => void;
}

/**
 * Field with the form data.
 */
export declare interface Field {
    /**
     * Flag, false if nested form data show as nested object, true otherwise.
     */
    storeDataInParentForm?: boolean;
    /**
     * Contains a field validation error if the field data is not valid.
     */
    error?: string;
    /**
     * Sets the error value.
     * @param error The error value to be set.
     */
    setError: (error: unknown) => void;
    /**
     * Contains a field validation errors if the field provides multiple errors (i.e. field is template).
     */
    errors?: Record<string, unknown>;
    /**
     * Flag, true, if the field is marked as touched.
     */
    touched: boolean;
    /**
     * Value of the field.
     */
    value: unknown;
    /**
     * The name of the component property that contains the field value.
     */
    valued: string;
    /**
     * Sets the value of the field.
     * @param value the value.
     */
    setValue: (value: unknown) => void;
    /**
     * Marks the field as touched.
     */
    setTouched: () => void;
    /**
     * Validates the field value.
     */
    validate: () => Promise<void>;
    /**
     * Returns the validation results without triggering an events and changing the state of the form.
     * @returns the {@link ValidationMessages} validation results.
     */
    getValidationResult: () => Promise<ValidationMessages>;
    /**
     * Sets the field to its default value.
     */
    reset: () => void;
    /**
     * Clears the data in the field.
     */
    clear: () => void;
    /**
     * Releases allocated resources, must be used when destroying an object instance.
     */
    dispose: () => void;
    /**
     * Initializes the value of the field.
     */
    init: () => void;
}

/**
 * Finds the depth of a given element in a tree. **Internal use only.**
 * @param value the root of the tree.
 * @param element the element to find the depth of.
 * @param depth the current depth of the tree (optional, default is 0).
 * @returns the depth of the element in the tree, or undefined if the element is not found.
 */
export declare function findTreeElementDepth<T extends {
    children?: T[];
}>(value: T, element?: T, depth?: number): number | undefined;

/**
 * The generic type that returns the first parameter of the generic type T. **Internal use only.**
 */
export declare type FirstParameter<T extends (...args: any) => any> = Parameters<T>[0];

/**
 * Represents a form that is rendered in Viewer or edited in Builder.
 */
export declare class Form {
    /**
     * Root component of the form.
     */
    readonly componentTree: ComponentData;
    /**
     * Localization of the form.
     */
    readonly localization: LocalizationStore;
    /**
     * Localization languages of the form.
     */
    readonly languages: Language[];
    /**
     * The set of action definitions.
     */
    readonly actions: ActionValues;
    /**
     * Properties of the component displaying the error.
     */
    errorProps: any;
    /**
     * The type name of the component displaying the tooltip.
     */
    tooltipType?: string;
    /**
     * The type name of the component displaying the error.
     */
    errorType?: string;
    /**
     * Default localization language of the form.
     */
    defaultLanguage: Language;
    /**
     * Creates a new instance of Form.
     * @param componentTree the root component of the form.
     * @param localization the localization of the form.
     * @param actions the form custom actions.
     * @param languages the localization languages of the form.
     * @param defaultLanguage the default localization language of the form.
     */
    constructor(componentTree: ComponentData, localization: LocalizationStore, actions: ActionValues, languages: Language[], defaultLanguage: Language);
    /**
     * @returns the actions names array.
     */
    get actionNames(): string[];
    /**
     * Initializes form fields.
     */
    initFields(): void;
    /**
     * Disposes the form. Disposes all the components and localization.
     */
    dispose(): void;
    /**
     * Removes the action from the form.
     * @param name the action name to remove.
     */
    removeAction(name: string): void;
    /**
     * Changes the existing action to the new one, adds the action if the existing action is not found.
     * @param oldActionName the existing action name.
     * @param newAction the new named action.
     */
    updateOrAddAction(oldActionName: string, newAction: NamedActionDefinition): void;
    /**
     * Clones the action.
     * @param namedAction the named action to clone.
     */
    cloneAction(namedAction: NamedActionDefinition): void;
    private rebindActionData;
    private rebindActionHandlers;
    private removeCodeActionBinding;
    private onComponentDataBeforeDelete;
    private onComponentDataAfterKeyChanged;
}

/**
 * Represents a function that validate the form data.
 * @param data the form data.
 * @returns the Record with form field errors.
 */
export declare type FormValidator = (data: Record<string, unknown>) => Promise<Record<string, string> | undefined>;

/**
 * Represents an array of functions that validate the form data.
 */
export declare type FormValidators = FormValidator[];

export declare const FormViewer: (props: FormViewerProps) => JSX_2.Element;

/**
 * Form viewer React component properties.
 */
export declare interface FormViewerProps {
    /**
     * The function for processing form events. **Internal use only.**
     * @param stream the event stream of the form viewer.
     */
    event?: (stream: EventStream) => void;
    /**
     * Loads the form.
     * @param name the form name.
     * @returns the string or Promise with the form.
     */
    getForm?: (name?: string) => string | Promise<string>;
    /**
     * The form name.
     */
    formName?: string;
    /**
     * All the metadata of the components of the form viewer.
     */
    view: View;
    /**
     * Custom actions for the form viewer.
     */
    actions?: CustomActions;
    /**
     * The set of functions that validate the form data.
     */
    formValidators?: FormValidators;
    /**
     * The initial data of the form.
     */
    initialData?: Record<string, unknown>;
    /**
     * If true, the component will not be wrapped by the error display component.
     * **Attention! Don't use it! Unstable API.**
     */
    erroneous?: boolean;
    /**
     * The React component that wraps every component in a form. **Internal use only.**
     */
    componentWrapper?: ComponentType<any>;
    /**
     * The default error wrapper used when errorType is not specified in the form.
     */
    errorWrapper?: ComponentType<ErrorWrapperProps>;
    /**
     * Display resolution type.
     */
    viewMode?: ViewMode;
    /**
     * The language of form.
     */
    language?: Language;
    /**
     * The function to localize the properties of a component.
     */
    localize?: ComponentLocalizer;
    /**
     * The set of metadata of validation rules, grouped by the type of value being validated.
     */
    validators?: Validators;
    /**
     * Function that calculates all child properties of a component. **Internal use only.**
     */
    computeChildren?: ComputeChildren;
    /**
     * The reference to {@link IFormViewer}.
     */
    viewerRef?: ForwardedRef<IFormViewer>;
    /**
     * The event is called whenever a form data changes.
     * @param data the {@link IFormData} with all the form data.
     */
    onFormDataChange?: (data: IFormData) => void;
    /**
     * The FormEngine license key.
     */
    licenseKey?: string;
}

/**
 * Represents the props passed to the FormViewer Store. **Internal use only.**
 */
export declare class FormViewerPropsStore {
    /**
     * The metadata of the form viewer components.
     */
    view: View;
    /**
     * The initial form data.
     */
    initialData: Record<string, unknown>;
    /**
     * The set of metadata of validation rules, grouped by the type of value being validated.
     */
    validators?: Validators;
    /**
     * The set of functions that validate the form data.
     */
    formValidators?: FormValidators;
    /**
     * The function to localize the properties of a component.
     */
    localizer?: ComponentLocalizer;
    /**
     * Custom actions for the form viewer.
     */
    actions?: ActionValues;
    /**
     * The full language code passed in the FormViewer properties.
     */
    propsLanguage?: Language;
    /**
     * The default error wrapper used when errorType is not specified in the form.
     */
    errorWrapper?: ComponentType<ErrorWrapperProps>;
    /**
     * Constructs a new FormViewerPropsStore from the given FormViewerProps.
     * @param formViewerProps the FormViewer props.
     * @returns the FormViewerPropsStore.
     */
    constructor(formViewerProps?: FormViewerProps);
    /**
     * Applies the given FormViewerProps.
     * @param formViewerProps the properties to apply.
     */
    applyProps(formViewerProps: FormViewerProps): void;
    /**
     * Returns the clone of the FormViewerPropsStore object.
     * @returns the clone of the FormViewerPropsStore object.
     */
    clone(): FormViewerPropsStore;
}

/**
 * Validation rules for FormViewer.
 */
export declare type FormViewerValidationRules = {
    /**
     * The set of custom validators.
     */
    custom?: CustomValidationRules;
    /**
     * The set of internal validators.
     */
    internal: ValidationRuleSet;
};

/**
 * Represents a form viewer Wrapper component.
 */
export declare type FormViewerWrapper = ComponentType<FormViewerWrapperComponentProps>;

/**
 * Represents the props for the WrapperComponent. WrapperComponent is a component that wraps the form viewer. Can be added externally.
 */
export declare interface FormViewerWrapperComponentProps {
    /**
     * The FormViewer language.
     */
    language: Language;
    /**
     * The React child node.
     */
    children: ReactNode;
}

/**
 * The type of arbitrary function that returns void or Promise&lt;void&gt;.
 */
export declare type Func = (...arg: any[]) => void | Promise<void>;

/**
 * Generates the template type name from the specified template name. **Internal use only.**
 * @param name the template name.
 * @returns the template type name.
 */
export declare function generateTemplateTypeName(name: string): string;

/**
 * Generates a unique name with the specified prefix. **Internal use only.**
 * @param prefix the prefix.
 * @param existingNames the set of existing names to match with which uniqueness will be checked.
 * @returns the generated name.
 */
export declare function generateUniqueName(prefix: string, existingNames: Set<string>): string;

/**
 * Extracts component properties default values from annotations . **Internal use only.**
 * @param annotations the array of component annotations.
 * @returns the object containing component properties default values.
 */
export declare function getDefault(annotations: Annotation[]): Readonly<Record<string, any>>;

/**
 * Extracts CSS properties default values from annotations . **Internal use only.**
 * @param annotations the array of component annotations.
 * @returns the object with CSS properties default values.
 */
export declare function getDefaultCss(annotations: Annotation[]): Readonly<Record<string, any>>;

/**
 * Converts the raw id to a Fluent compatible id, i.e. replaces all the spaces with underscores. **Internal use only.**
 * @param rawId some raw id.
 * @returns the Fluent compatible id.
 */
export declare const getFluentCompatibleId: (rawId: string) => string;

/**
 * Converts the form data to a Fluent compatible. **Internal use only.**
 * @param data the form data.
 * @returns all the form data that is of the FluentVariable type.
 * Additionally, the keys of the returned object are converted to the snake case.
 */
export declare const getFluentData: (data: Record<string, unknown>) => Record<string, FluentVariable_2>;

/**
 * Generates the random string. **Internal use only.**
 * @returns the generated random string.
 */
export declare const getKey: () => string;

/**
 * Retrieves the property block type for a given rule key. **Internal use only.**
 * @param ruleKey the rule key.
 * @returns the property block type. Validator property block types are prefixed with 'validator-'.
 */
export declare const getValidatorPropertyBlockType: (ruleKey: string) => PropertyBlockType;

/**
 * Groups the array of values by function predicate. **Internal use only.**
 * @param array the array of values.
 * @param predicate the function that returns a string to group the values of the array.
 * @returns the Record with grouped values.
 */
export declare function groupBy<T>(array: T[], predicate: (value: T, index: number, array: T[]) => string): Record<string, T[]>;

/**
 * The arbitrary HTML attributes for the component.
 */
export declare type HtmlAttribute = Record<string, string>;

/**
 * The annotation builder for the 'key' property of a component.
 */
export declare const htmlAttributes: AnnotationBuilder<unknown>;

/**
 * Type of disposable object.
 */
export declare type IDisposable = {
    /**
     * Performs the tasks necessary to release resources correctly.
     */
    dispose: () => void;
};

/**
 * The interface for accessing the form data.
 */
export declare interface IFormData {
    /**
     * @returns the Record with all the form data.
     */
    get data(): Record<string, unknown>;
    /**
     * @returns the Record with all validation error messages.
     */
    get errors(): Record<string, unknown>;
    /**
     * true if the form contains errors, otherwise false.
     */
    get hasErrors(): boolean;
    /**
     * @returns A user-defined key-value observable storage. Utilize it to store and share any custom data.
     */
    get state(): Record<string, unknown>;
    /**
     * Sets the validation error message for all form data fields.
     * @param message the validation error message.
     */
    setAllErrors: (message?: string) => void;
    /**
     * Validates the data in the form.
     */
    validate: () => Promise<void>;
    /**
     * Returns the validation results without triggering an events and changing the state of the form.
     * @returns the {@link ValidationMessages} validation results.
     */
    getValidationResult: () => Promise<ValidationMessages>;
    /**
     * If true, then validation is in progress.
     */
    get isValidating(): boolean;
    /**
     * Sets the form to its default value.
     */
    reset: () => void;
    /**
     * Clears the form data.
     */
    clear: () => void;
}

/**
 * Description of the form data for the code editor.
 */
export declare const IFormDataDeclaration = "declare interface IFormData {\n  /**\n   * @returns the {@link Record} with all the form data.\n   */\n  get data(): Record<string, unknown>\n\n  /**\n   * @returns the {@link Record} with all validation error messages.\n   */\n  get errors(): Record<string, unknown>\n\n  /**\n   * true if the form contains errors, otherwise false.\n   */\n  get hasErrors(): boolean\n\n  /**\n   * @returns A user-defined key-value observable storage. Utilize it to store and share any custom data.\n   */\n  get state(): Record<string, unknown>\n\n  /**\n   * Sets the validation error message for all form data fields.\n   * @param message the validation error message.\n   */\n  setAllErrors(message?: string): void\n\n  /**\n   * Validates the data in the form.\n   */\n  validate(): Promise<void>\n    \n  /**\n   * Returns the validation results without triggering an events and changing the state of the form.\n   * @returns the validation results.\n   */\n  getValidationResult: () => Promise<ValidationMessages>\n\n  /**\n   * If true, then validation is in progress.\n   */\n  get isValidating(): boolean\n\n  /**\n   * Sets the form to its default value.\n   */\n  reset(): void\n\n  /**\n   * Clears the form data.\n   */\n  clear(): void\n}";

/**
 * The form viewer settings interface.
 */
export declare interface IFormViewer {
    /**
     * @returns the {@link IFormData} with all the form data.
     */
    get formData(): IFormData;
}

/**
 * Replaces empty form fields with an empty string. **Internal use only.**
 * @param form the form.
 * @returns all form data where empty fields are filled with empty strings.
 */
export declare const initFormFields: (form: ComponentData) => Record<string, unknown>;

/* Excluded from this release type: internalErrorModel */

/**
 * React component properties that display an internal form view error. **Internal use only.**
 */
export declare interface InternalErrorProps {
    /**
     * The internal error.
     */
    error: any;
}

/**
 * Type predicate, asserts that the value is an instance of ContainerAnnotation. **Internal use only.**
 * @param value the value.
 * @returns true if the value is an instance of ContainerAnnotation, false otherwise.
 */
export declare const isContainer: (value: Annotation) => value is ContainerAnnotation;

/**
 * Returns true if the property value is calculated by the function, otherwise false. **Internal use only.**
 * @param componentProperty the component property.
 * @returns true if the property value is calculated by the function, otherwise false.
 */
export declare function isFunctionalProperty(componentProperty?: ComponentProperty): boolean;

/**
 * Returns true if the property value is localized, otherwise false. **Internal use only.**
 * @param componentProperty the component property.
 * @returns true if the property value is localized, otherwise false.
 */
export declare function isLocalizedProperty(componentProperty?: ComponentProperty): boolean;

/**
 * Type predicate, asserts that the value is a Promise. **Internal use only.**
 * @param value the value.
 * @returns true if the value is a Promise, false otherwise.
 */
export declare function isPromise<T = any>(value: any): value is Promise<T>;

/**
 * Type predicate, asserts that the value is an instance of PropertyAnnotation. **Internal use only.**
 * @param value the value.
 * @returns true if the value is an instance of PropertyAnnotation, false otherwise.
 */
export declare const isProperty: (value: Annotation) => value is PropertyAnnotation;

/**
 * Type predicate, asserts that the value is a string. **Internal use only.**
 * @param value the value.
 * @returns true if the value is a string, false otherwise.
 */
export declare function isString(value: any): value is string;

/**
 * The form viewer settings interface.
 */
export declare interface IStore {
    /**
     * The displayed form.
     */
    form: Form;
    /**
     * @returns the slice of the initial data in accordance with the Store hierarchy. **Internal use only.**
     */
    get initialDataSlice(): Record<string, unknown> | undefined;
    /**
     * Performs the callback function on each element of the component tree, accumulates the return values.
     * @param callback the function that calculates the value for the accumulator.
     * @param initialValue the initial value for the accumulator.
     * @template T the return value type.
     * @returns the accumulated value.
     */
    reduceScreen: <T>(callback: (accumulator: T, current: ComponentData) => T, initialValue: T) => T;
    /**
     * The function to localize the validation error message.
     * @param componentStore the component settings.
     * @param validationResults the results of the validation.
     * @returns the result of localization or undefined.
     */
    localizeErrorMessages: (componentStore: ComponentStore, validationResults?: ValidationResult[]) => string | undefined;
    /**
     * Correctly clears allocated resources, the function must be called when destroying an instance of the class.
     */
    dispose: () => void;
}

/**
 * Returns true if the component key is unique across the entire component tree. **Internal use only.**
 * @param value the component key.
 * @param store the form viewer settings.
 * @returns true if the component key is unique across the entire component tree.
 */
export declare const isUniqueKey: RuleValidator<string>;

/**
 * Determines if the given type is a validator property block type. **Internal use only.**
 * @param type the type to be checked.
 * @returns the boolean value indicating if the type is a validator property block type.
 */
export declare const isValidatorPropertyBlockType: (type: PropertyBlockType) => boolean;

/**
 * The annotation for the 'key' property of the component.
 */
export declare const key: Annotation;

/**
 * The unique Symbol for the key property.
 */
export declare const KeySymbol: unique symbol;

/**
 * The element with the value and the label.
 */
export declare interface LabeledValue {
    /**
     * The value.
     */
    value: string | number;
    /**
     * The label.
     */
    label?: string;
}

/**
 * The language to localize the form builder.
 */
export declare class Language {
    readonly code: string;
    readonly dialect: string;
    readonly name: string;
    readonly description: string;
    readonly bidi: BiDi;
    /**
     * Creates a localization language for the form builder.
     * @param code the language code, for example, 'en'.
     * @param dialect the dialect code, for example, 'US'.
     * @param name the name of the language, for example 'English'.
     * @param description the description of the language, for example 'American English'.
     * @param bidi the type of text layout, for example, BiDi.LTR.
     */
    constructor(code: string, dialect: string, name: string, description: string, bidi?: BiDi);
    /**
     * @returns Full code of the Language i.e en-US, en-GB etc.
     */
    get fullCode(): string;
    /**
     * Clones an existing instance of the language.
     * @param source the cloning object.
     * @returns the object clone.
     */
    static clone(source: Language): Language;
}

/**
 * The full language code, e.g. 'en-US'.
 */
export declare type LanguageFullCode = string;

/**
 * Loads a resource into the document head asynchronously. **Internal use only.**
 * @param id the identifier of the resource.
 * @param href represents a URL to the resource.
 * @param rel the relationship of the resource to the document.
 * @returns the promise that resolves when the resource has been loaded successfully.
 */
export declare const loadResource: (id: string, href: string, rel: Rel) => Promise<void>;

/**
 * Observable storage of localization. **Internal use only.**
 */
export declare class LocalizationStore {
    private localizationCache;
    /**
     * The localization data.
     */
    readonly value: LocalizationValue;
    /**
     * Returns value of localization constant.
     * @param languageFullCode the full code (en-US, en-GB etc.) of the language we are looking to localize.
     * @param componentKey the component we are looking to localize.
     * @param propertyName the property name we are looking to localize.
     * @param type the type of localization.
     * @returns the value of localization constant.
     */
    getLocalization(languageFullCode: string, componentKey: string, propertyName: string, type: LocalizationType): string | undefined;
    /**
     * Sets localization for component property.
     * @param languageFullCode the full code (en-US, en-GB etc.) of the language in which localization will be set.
     * @param componentKey the component key that requires localization.
     * @param propertyName the component's property name to be localized.
     * @param type the type of localization.
     * @param value the localization value.
     */
    setLocalization(languageFullCode: string, componentKey: string, propertyName: string, type: LocalizationType, value: string): void;
    /**
     * Removes localization for component.
     * @param componentKey the component key that requires localization removal.
     */
    removeLocalization(componentKey: string): void;
    /**
     * Removes localization for component with specified type.
     * @param componentKey the component key that requires localization removal.
     * @param type the localization type.
     */
    removeLocalizationForType(componentKey: string, type: LocalizationType): void;
    /**
     * Checks that the specified language exists in the localization.
     * @param languageFullCode The full code (en-US, en-GB etc.) of the language to be checked.
     * @returns true if the specified language exists in the localization.
     */
    hasLanguage(languageFullCode: string): boolean;
    /**
     * Checks that the specified property has localization.
     * @param componentKey the component we are looking to localize.
     * @param propertyName the component's property name to be localized.
     * @param type the type of localization.
     * @returns true if the specified property has localization in at least one language.
     */
    hasLocalization(componentKey: string, propertyName: string, type: LocalizationType): boolean;
    /**
     * If the FluentBundle for the specified language is found, this function returns it.
     * Otherwise, an empty FluentBundle is returned.
     * @param languageFullCode the full code (en-US, en-GB etc.) of the language to get fluent bundle.
     * @returns the FluentBundle for the specified language.
     */
    getFluentBundle(languageFullCode: string): FluentBundle;
    /**
     * Changes the component key for all languages in the value object.
     * @param oldComponentKey the old component key to be replaced.
     * @param newComponentKey the new component key to replace the old component key.
     */
    changeComponentKey(oldComponentKey: string, newComponentKey: string): void;
    /**
     * Retrieves the localization values for a given component key.
     * @param componentKey the key of the component to retrieve localization for.
     * @returns the object containing the localization values for the component in each supported language.
     */
    getLocalizationForComponent(componentKey: string): LocalizationValue;
    /**
     * Inserts the localization values for a given component key. Replaces the old component key with the new component key.
     * @param localization the localization object for insertion.
     * @param oldComponentKey the old component key that needs to be replaced.
     * @param newComponentKey the new component key to be added.
     */
    addLocalizationWithNewKey(localization: LocalizationValue, oldComponentKey: string, newComponentKey: string): void;
    /**
     * The constructor.
     * @param value the initial localization value.
     */
    constructor(value?: LocalizationValue);
}

/**
 * Localization testing request.
 */
export declare type LocalizationTestRequest = {
    /**
     * Localization value to be tested.
     */
    localization: string;
    /**
     * The identifier of the localization string.
     */
    localizationStringId: string;
    /**
     * The localization Language.
     */
    language: Language;
    /**
     * The test form data.
     */
    data: Record<string, FluentVariable_2>;
};

/**
 * Represents the type of localization. The localization can be for a component, tooltip or for validator.
 */
export declare type LocalizationType = 'component' | 'tooltip' | string;

/**
 * The format in which localization is stored.
 * @example
 * {
 *  "en-US" :
 *  {
 *    "componentKey:
 *      {
 *        "property" : "This {$value} is localized!"
 *      }
 *  }
 * }
 */
export declare type LocalizationValue = Record<LanguageFullCode, ComponentsLocalization>;

/**
 * The validation result messages map.
 */
declare type MessagesMap = Record<string, string[] | Record<string, string[] | any>>;

/**
 * Component metadata for the form builder.
 */
export declare class Meta {
    readonly type: string;
    readonly properties: Annotation[];
    readonly css: Annotation[];
    readonly wrapperCss: Annotation[];
    readonly modules: Annotation[];
    readonly customPreview?: ReactNode;
    readonly valuedAn?: Annotation | undefined;
    readonly kind: ComponentKind;
    /**
     * Creates the component metadata for the form builder.
     * @param type the component type name.
     * @param properties the component's properties metadata.
     * @param css the component's CSS metadata.
     * @param wrapperCss the component's wrapper CSS metadata.
     * @param modules common metadata for the component.
     * @param customPreview the custom ReactNode to be drawn on the toolbar.
     * @param valuedAn the metadata for the component value.
     * @param kind the component kind.
     */
    constructor(type: string, properties: Annotation[], css: Annotation[], wrapperCss: Annotation[], modules: Annotation[], customPreview?: ReactNode, valuedAn?: Annotation | undefined, kind?: ComponentKind);
}

/**
 * Represents component metadata for the form viewer.
 * @template T the type of React component properties.
 */
export declare class Model<T = any> {
    #private;
    readonly actionsInitializer?: ActionsInitializer | undefined;
    readonly valued?: string | undefined;
    readonly valueType?: keyof SchemaTypeMap | undefined;
    readonly defaultProps?: Readonly<Record<string, any>> | undefined;
    readonly css?: Css | undefined;
    readonly wrapperCss?: Css | undefined;
    readonly typeName?: string | undefined;
    readonly icon?: ComponentType | undefined;
    readonly kind: ComponentKind;
    /**
     * The React component.
     */
    readonly component: ComponentType<T>;
    /**
     * Creates component metadata for the form viewer.
     * @param component the React component.
     * @param name the component name.
     * @param actionsInitializer the function to initialize actions in the component.
     * @param valued the name of the component property where the component value is stored.
     * @param valueType the type of the component value.
     * @param defaultProps the component's default property values.
     * @param css the component's CSS values.
     * @param wrapperCss the component's wrapper CSS values.
     * @param typeName the component type name.
     * @param icon the component icon.
     * @param kind the component kind.
     * @template T the type of React component properties.
     */
    constructor(component: ComponentType<T>, name?: string, actionsInitializer?: ActionsInitializer | undefined, valued?: string | undefined, valueType?: keyof SchemaTypeMap | undefined, defaultProps?: Readonly<Record<string, any>> | undefined, css?: Css | undefined, wrapperCss?: Css | undefined, typeName?: string | undefined, icon?: ComponentType | undefined, kind?: ComponentKind);
    /**
     * @returns the component name, or type if there is no component name.
     */
    get name(): string;
    /**
     * @returns the component type name.
     */
    get type(): string;
}

/**
 * Metadata for a component property that is not a property of the component itself,
 * but is supplied by the form builder.
 */
export declare class ModuleAnnotation extends Annotation {
}

/**
 * Computes the autorun name based on the owner, name, and parameters. **Internal use only.**
 * @param owner the owner of the autorun.
 * @param name the name of the autorun.
 * @param params the parameters for specific autorun.
 * @returns the computed autorun name.
 */
export declare function nameAutorun(owner: string, name: string, params?: Record<string, any>): string;

/**
 * Represents a named action definition.
 */
export declare type NamedActionDefinition = {
    /**
     * The name of action definition.
     */
    name: string;
    /**
     * The definition of an action.
     */
    actionDefinition: ActionDefinition;
};

/**
 * Creates the observable React component. **Internal use only.**
 * @param displayName the displayName value of the React component.
 * @param component the React component.
 * @returns the observable React component.
 */
export declare function namedObserver<T extends FunctionComponent<any>>(displayName: string, component: T): T;

/**
 * Computes the observable name based on the owner, name, and parameters. **Internal use only.**
 * @param owner the owner of the observable.
 * @param params the parameters for specific observable.
 * @returns the computed observable name.
 */
export declare function nameObservable(owner: string, params?: Record<string, any>): string;

/**
 * The annotation builder for a component property with type 'ReactNode'.
 */
export declare const node: NodeAnnotationBuilder<ReactNode>;

/**
 * The builder class to define the node metadata property.
 * @template T the property type.
 */
export declare class NodeAnnotationBuilder<T> extends AnnotationBuilder<T> {
    /**
     * Creates a component property metadata builder.
     * @param editor the property editor type.
     * @template T the property type.
     */
    constructor(editor: EditorType);
    /**
     * Specifies a function that will create conditions that check if a child component can be bound to a parent slot.
     * @param slotConditionBuilder the function that returns a string containing the source code of the function to bind child components.
     * @returns the instance of the metadata property builder.
     */
    withSlotConditionBuilder(slotConditionBuilder: (props: any) => string): this;
}

/**
 * The annotation builder for a component property with type 'number'.
 */
export declare const number: TypedBuilder<number | undefined>;

/**
 * The annotation builder for a component property with type 'enum', the property value can only be one of enum.
 */
export declare const oneOf: <U extends string | number>(...values: U[]) => OneOfBuilder<U>;

/**
 * The builder class to define the metadata property of the form builder component.
 * Used for properties where the property value can be selected from one of the predefined values.
 * @template T the property type.
 */
export declare class OneOfBuilder<T> extends QuantifierBuilder<T> {
    /**
     * Sets the radio buttons as the component's property editor.
     * @returns the modified instance of the builder.
     */
    radio(): this;
    /**
     * Sets the default value for the component property.
     * @param value the default value.
     * @returns the modified instance of the builder.
     */
    default(value: T): this;
}

/**
 * The type to describe the action parameter.
 * @template T the type of action parameter.
 */
export declare type ParameterDefinition<T> = [PropertyKey_2<T>, ParameterType];

/**
 * The type for the parameter name.
 */
export declare type ParameterName = string;

/**
 * Parameter type.
 */
export declare type ParameterType = 'string' | 'number' | 'boolean';

/**
 * The format for saving a form designed in Form Builder.
 */
export declare interface PersistedForm {
    /**
     * The version of the saved form.
     */
    version?: PersistedFormVersion;
    /**
     * Represents a set of action definitions.
     */
    actions?: ActionValues;
    /**
     * Properties of the component displaying the error.
     */
    errorProps?: any;
    /**
     * Name of the type of component that displays the tooltip.
     */
    tooltipType?: string;
    /**
     * Name of the type of component displaying the error.
     */
    errorType?: string;
    /**
     * Settings for components that display the form.
     */
    form: ComponentStore;
    /**
     * Localization of the form.
     */
    localization: LocalizationValue;
    /**
     * Form languages.
     */
    languages: Language[];
    /**
     * The default form language.
     */
    defaultLanguage: string;
}

/**
 * The version of the saved form.
 */
export declare enum PersistedFormVersion {
    version1 = "1"
}

/**
 * Type for component property metadata without the 'key' property, but with the 'editor' property.
 */
export declare type PreAnnotation = Partial<Omit<Annotation, 'key'>> & Pick<Annotation, 'editor'>;

/**
 * Metadata for the component property for the form builder.
 */
export declare class PropertyAnnotation extends Annotation {
    /**
     * Possible values for the property.
     */
    data: LabeledValue[];
}

/**
 * Represents the type of property block.
 */
export declare type PropertyBlockType = 'component' | 'tooltip' | string;

/**
 * Component property key type.
 * @template T the type of action parameter
 */
declare type PropertyKey_2<T> = keyof T & string;
export { PropertyKey_2 as PropertyKey }

/**
 * The abstract builder class to define the metadata property of the form builder component.
 * Used for properties where the property value can be selected from predefined values.
 * @template T the property type.
 */
export declare abstract class QuantifierBuilder<T> extends TypedBuilder<T> {
    /**
     * Possible values for the property.
     */
    values: (string | number)[];
    /**
     * Labels for the possible values of the property.
     */
    labels?: string[];
    /**
     * Marks the component property as required.
     * @returns the modified instance of the builder.
     */
    get required(): QuantifierBuilder<NonNullable<T>>;
    /**
     * Sets the labels for predefined values.
     * @param labels the labels.
     * @returns the modified instance of the builder.
     */
    labeled(...labels: string[]): this;
    /**
     * Creates component property metadata for the form builder.
     * @param key the unique key of the component property.
     * @returns the instance of the component property metadata for the form builder.
     */
    build(key: string): Annotation;
    /**
     * Sets the default value for the component property.
     * @param value the default value, can be an array of values.
     * @returns the modified instance of the builder.
     */
    default(value: T | T[]): this;
}

/**
 * Represents a relationship attribute value used in HTML.
 */
export declare type Rel = 'stylesheet' | string;

/**
 * The annotation builder for the synthetic 'renderWhen' property of the component.
 */
export declare const renderWhen: TypedBuilder<boolean | undefined>;

/**
 * The function that validates a value and returns the validation result.
 * @param value the validated value.
 * @param store the form viewer settings.
 * @returns the Promise with the results of the validation.
 */
export declare type ResolvedValidator = (value: any, store: IStore) => Promise<ValidationResult[] | undefined>;

/**
 * The function that checks the value and returns the result of the rule validation, see {@link RuleValidatorResult}.
 * @param value the value.
 * @param store the form viewer settings
 * @param args the rule arguments.
 * @template T the value type.
 */
export declare type RuleValidator<T = any> = (value: T, store: IStore, args?: Record<string, unknown>) => RuleValidatorResult | Promise<RuleValidatorResult>;

/**
 * The result of validation of a single rule, true means validation was successful,
 * false means validation failed, string means error message.
 */
export declare type RuleValidatorResult = string | boolean;

/**
 * The validation function factory.
 * @param value the validated value.
 * @template T the validation function factory arguments.
 * @returns the function that validates a value.
 */
export declare type SchemaResolver<T> = (value: T) => ResolvedValidator;

/**
 * The value type name.
 */
export declare type SchemaType = keyof SchemaTypeMap;

/**
 * Describes the mapping of a value type name to a type.
 */
export declare type SchemaTypeMap = {
    /**
     * The string.
     */
    'string': string;
    /**
     * The number.
     */
    'number': number;
    /**
     * The boolean.
     */
    'boolean': boolean;
    /**
     * The object.
     */
    'object': object;
    /**
     * The array.
     */
    'array': any[];
    /**
     * The enumeration.
     */
    'enum': any;
    /**
     * The date.
     */
    'date': Date;
};

/**
 * Form viewer screen metadata. **Internal use only.**
 */
export declare const screenModel: Model<{
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>>;

/**
 * Properties of the root component of the form. **Internal use only.**
 */
export declare interface ScreenProps {
    /**
     * The React child node.
     */
    children: ReactNode;
}

export declare const SDiv: StyledComponent<{
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
}, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

/**
 * Value setting function type.
 * @param value the value.
 * @template T the value type.
 */
export declare type Setter<T = any> = (value: T) => void;

/**
 * The annotation builder for a component property with type 'CSS unit' (width, height, etc.).
 */
export declare const size: TypedBuilder<string | undefined>;

/**
 * Form viewer slot metadata. **Internal use only.**
 */
export declare const slotModel: Model<any>;

/**
 * The annotation builder for a component property with type 'enum', the property value can contain multiple enum values.
 */
export declare const someOf: <U extends string | number>(...values: U[]) => SomeOfBuilder<U>;

/**
 * The builder class to define the metadata property of the form builder component.
 * Used for properties where the property value can be a set of predefined values.
 * @template T the property type.
 */
export declare class SomeOfBuilder<T> extends QuantifierBuilder<T> {
    /**
     * Sets the default value for the component property.
     * @param value the default value.
     * @returns the modified instance of the builder.
     */
    default(value: T[]): this;
}

/**
 * The form viewer settings. **Internal use only.**
 */
export declare class Store implements IStore, IFormViewer {
    #private;
    formViewerPropsStore: FormViewerPropsStore;
    readonly parentStore?: Store | undefined;
    readonly parentComponentStore?: ComponentStore | undefined;
    /**
     * The currently selected language.
     */
    selectedLanguage?: Language;
    /**
     * The Subject for submitting form events.
     */
    readonly eventSubject: Subject<ActionEventArgs>;
    /**
     * Current display resolution type.
     */
    viewMode: ViewMode;
    /**
     * The form.
     */
    form: Form;
    /**
     * Creates form viewer settings.
     * @param formViewerPropsStore the form viewer store settings.
     * @param parentStore the form viewer settings, used in templates.
     * @param parentComponentStore the parent component settings.
     */
    constructor(formViewerPropsStore: FormViewerPropsStore, parentStore?: Store | undefined, parentComponentStore?: ComponentStore | undefined);
    /**
     * @returns the Record with the common actions.
     */
    get commonActions(): ActionValues;
    /**
     * Returns an action by the specified action name and action type.
     * @param name the action name.
     * @param type the action type.
     * @returns the action.
     */
    getAction(name: string, type: ActionType): ActionDefinition;
    /**
     * @inheritDoc
     */
    get formData(): ComponentData;
    /**
     * Clears the form in Form Viewer.
     */
    clear(): void;
    /**
     * @inheritDoc
     */
    dispose(): void;
    /**
     * @inheritDoc
     */
    get initialDataSlice(): Record<string, unknown> | undefined;
    /**
     * @inheritDoc
     */
    reduceScreen<T>(callback: (accumulator: T, current: ComponentData) => T, initialValue: T): T;
    /**
     * Searches for an action, returns definition for the found action.
     * @param actionData the action's data.
     * @returns the action definition.
     * @throws Error, if action was not found.
     */
    findAction(actionData: ActionData): ActionDefinition;
    /**
     * Returns model for the specified type.
     * @param type the component type.
     * @returns the model for the specified type.
     */
    getModel(type: string): Model<Record<string, any>> | Model<InternalErrorProps>;
    private addTemplateModel;
    /**
     * Loads a form by form name and sets that form in the form viewer.
     * @param getForm the function that loads the form.
     * @param formName the form name.
     */
    loadForm(getForm?: (name?: string) => string | Promise<string>, formName?: string): void;
    /**
     * Creates the element for the component tree.
     * @param componentStore the component settings.
     * @param deferFieldCalculation if true, then the calculated field must be explicitly initialized.
     * @param model the component's metadata.
     * @returns the element for the component tree.
     */
    createComponentData(componentStore: ComponentStore, deferFieldCalculation?: boolean, model?: Model): ComponentData;
    /**
     * Returns the object with validators for the specified value type.
     * @param type the value type.
     * @returns the object with validators for the specified value type.
     */
    getValidationRules(type: SchemaType): FormViewerValidationRules;
    private createField;
    /**
     * Populates the value of this store with the values of the saved form.
     * @param text saved form value.
     */
    applyStringForm(text: string): void;
    private fixPropertyTypes;
    private fixDateProperty;
    /**
     * Populates the value of this store with the values of the saved form.
     * @param persistedForm saved form value.
     */
    applyPersistedForm(persistedForm: PersistedForm): void;
    /**
     * @returns the current display language.
     */
    get displayedLanguage(): Language;
    /**
     * Localizes a component store based on the given localization type. If a custom localizer is available, it will be used.
     * @param type the type of localization.
     * @param componentStore the component settings.
     * @returns the Record with the localized properties.
     */
    localizeComponent(type: LocalizationType, componentStore: ComponentStore): Record<string, any>;
    /**
     * Localizes validator error messages.
     * @param componentStore the component settings.
     * @param validationResults the validation results.
     * @returns the localized error messages joined by space, or undefined if validationResults is undefined.
     */
    localizeErrorMessages(componentStore: ComponentStore, validationResults?: ValidationResult[]): string | undefined;
}

/**
 * **Internal use only.**
 */
export declare const 
/**
* **Internal use only.**
*/
/**
 * **Internal use only.**
 */
StoreContext: Context<Store | null>;

/**
 * **Internal use only.**
 */
export declare const 
/**
* **Internal use only.**
*/
/**
 * **Internal use only.**
 */
StoreProvider: Provider<Store>;

/**
 * The annotation builder for a component property with type 'string'.
 */
export declare const string: TypedBuilder<string | undefined>;

/**
 * Metadata for the component style property for the form builder.
 */
export declare class StyleAnnotation extends Annotation {
}

/**
 * SuppressResizeObserverErrors component is used to suppress ResizeObserver errors. **Internal use only.**
 * @param props the component props.
 * @param props.children the child elements to render.
 * @returns the rendered child elements.
 */
export declare const SuppressResizeObserverErrors: ({ children }: SuppressResizeObserverErrorsProps) => JSX_2.Element;

/**
 * Represents the props for the SuppressResizeObserverErrors component. **Internal use only.**
 */
export declare interface SuppressResizeObserverErrorsProps {
    /**
     * The React child node.
     */
    children: ReactNode;
}

/**
 * Represents a synchronous event that can be subscribed to and invoked. **Internal use only.**
 * @template TSender the type of the object that raises the event.
 * @template TEventArgs the type of the event arguments.
 */
export declare class SyncEvent<TSender, TEventArgs> {
    private handlers;
    /**
     * Adds a handler to the list of subscribers.
     * @param handler the handler function to be added.
     */
    subscribe(handler: SyncEventHandler<TSender, TEventArgs>): void;
    /**
     * Removes the specified event handler from the list of handlers.
     * @param handler the event handler to remove.
     */
    unsubscribe(handler: SyncEventHandler<TSender, TEventArgs>): void;
    /**
     * Returns true if the object has subscribers, false otherwise.
     * @returns true if the object has handlers registered for events, otherwise returns false.
     */
    get isSubscribed(): boolean;
    /**
     * Invokes the event by calling all registered event handlers.
     * @param sender the sender of the event.
     * @param eventArgs the event arguments.
     */
    invoke(sender: TSender, eventArgs: TEventArgs): void;
    /**
     * Dispose method to release all handlers.
     */
    dispose(): void;
}

/**
 * Represents a synchronous event handler.
 * @template TSender the type of the event source.
 * @template TEventArgs the type of the event arguments.
 */
export declare type SyncEventHandler<TSender, TEventArgs> = (source: TSender, eventArgs: TEventArgs) => void;

/**
 * The field with the form data, contains the value of the nested form. **Internal use only.**
 */
export declare class TemplateField implements Field {
    readonly componentStore: ComponentStore;
    readonly viewerStore: IStore;
    /**
     * @inheritDoc
     */
    valued: string;
    /**
     * @inheritDoc
     */
    touched: boolean;
    /**
     * Creates the nested form field with form data for the component.
     * @param componentStore the component settings.
     * @param viewerStore viewerStore the form viewer settings.
     */
    constructor(componentStore: ComponentStore, viewerStore: IStore);
    /**
     * @inheritDoc
     */
    get storeDataInParentForm(): any;
    /**
     * @inheritDoc
     */
    get value(): unknown;
    /**
     * @inheritDoc
     */
    dispose(): void;
    /**
     * @inheritDoc
     */
    clear(): void;
    /**
     * @inheritDoc
     */
    reset(): void;
    /**
     * @inheritDoc
     */
    setTouched(): void;
    /**
     * @inheritDoc
     */
    setValue(value: unknown): void;
    /**
     * @inheritDoc
     */
    validate(): Promise<void>;
    /**
     * @inheritDoc
     */
    getValidationResult(): Promise<undefined>;
    /**
     * @inheritDoc
     */
    init(): void;
    /**
     * @returns the form for the field.
     */
    get form(): ComponentData;
    /**
     * @inheritDoc
     */
    get errors(): Record<string, unknown>;
    /**
     * @inheritDoc
     */
    setError: (error: unknown) => void;
}

/**
 * Localization testing function. **Internal use only.**
 * @param request the localization testing request.
 * @returns the localization testing result.
 */
export declare const testFluentLocalization: (request: LocalizationTestRequest) => CalculableResult;

/**
 * Converts the object containing component property metadata into an array. **Internal use only.**
 * @param annotations the object containing component property metadata.
 * @param setup the custom options for the component's property metadata builder.
 * @returns the metadata array of the component properties.
 */
export declare function toArray<T extends object = any>(annotations?: Annotations<T>, setup?: BuilderSetup): Annotation[];

/**
 * Converts the array of elements into the array of {@link LabeledValue} elements.
 * @param items the array of elements.
 * @param upper if true, the first character in {@link LabeledValue.label} will be capitalized.
 * @returns the array of {@link LabeledValue} elements.
 */
export declare const toLabeledValues: (items: string[] | LabeledValue[], upper?: boolean) => {
    value: string | number;
    label: string | undefined;
}[];

/**
 * The annotation builder for component tooltip properties.
 */
export declare const tooltipProps: AnnotationBuilder<unknown>;

/**
 * The annotation builder for the form property describing the type of form tooltip.
 */
export declare const tooltipType: TypedBuilder<string | undefined>;

/**
 * Executes a given function on each node of a tree. **Internal use only.**
 * @param tree the root node of the tree.
 * @param fn the function to be executed on each node of the tree.
 */
export declare function treeForEach<T extends {
    children?: T[];
}>(tree: T, fn: (treeNode: T) => void): void;

/**
 * The builder class to define the metadata property of the form builder component.
 * Used for properties where the property value can be validated.
 * @template T the property type.
 */
export declare class TypedBuilder<T> extends BaseBuilder<T> {
    /**
     * Marks the component property as required.
     * @returns the modified instance of the builder.
     */
    get required(): TypedBuilder<NonNullable<T>>;
    /**
     * Sets the default value for the component property.
     * @param value the default value.
     * @returns the modified instance of the builder.
     */
    default(value: T): this;
    /**
     * Modifies the component property metadata builder with validation properties.
     * @param validator the validation function.
     * @param errorMap the validation error settings.
     * @returns the modified instance of the builder.
     */
    validated(validator: RuleValidator<T>, errorMap: ErrorMap): this;
}

/**
 * A record containing localizations grouped by localization type.
 */
export declare type TypedLocalization = Partial<Record<LocalizationType, ComponentPropsLocalization>>;

/**
 * Unloads a resource from the DOM based on its ID. **Internal use only.**
 * @param id the ID of the resource to unload.
 */
export declare const unloadResource: (id: string) => void;

/**
 * @returns the instance of the ComponentData of the currently rendered component.
 */
export declare const 
/**
* @returns the instance of the ComponentData of the currently rendered component.
*/
/**
 * @returns the instance of the ComponentData of the currently rendered component.
 */
useComponentData: () => ComponentData;

/**
 * Creates a disposable object and dispose the object when the React component is unmounted. **Internal use only.**
 * @param factory the factory function to create a disposable object.
 * @returns the disposable object.
 */
export declare function useDisposable<T extends IDisposable>(factory: () => T): T | undefined;

/**
 * @returns the model of React component used to display the error.
 */
export declare const useErrorModel: () => Model<ErrorWrapperProps>;

/**
 * **Internal use only.**
 */
export declare const 
/**
* **Internal use only.**
*/
/**
 * **Internal use only.**
 */
useStore: () => Store;

/**
 * @returns the type of React component used to display the tooltip. **Internal use only.**
 */
export declare const useTooltipType: () => string | undefined;

/**
 * **Internal use only.**
 */
export declare const 
/**
* **Internal use only.**
*/
/**
 * **Internal use only.**
 */
useViewerProps: () => Readonly<FormViewerProps>;

/**
 * The annotation builder for arbitrary HTML attributes of a component.
 */
export declare const validation: AnnotationBuilder<unknown>;

/**
 * The validation result messages.
 */
declare type ValidationMessages = string[] | MessagesMap | undefined;

/**
 * The result of the validation.
 */
export declare type ValidationResult = {
    /**
     * The validation rule settings.
     */
    settings: ValidationRuleSettings;
    /**
     * The validation error message text.
     */
    message?: string;
};

/**
 * Validation rule metadata required to create a validation function.
 */
export declare type ValidationRule = {
    /**
     * Metadata of validation rule parameters.
     */
    params?: ValidationRuleParameter[];
    /**
     * The validation function factory.
     */
    validatorFactory: ValidatorFactory<any>;
};

/**
 * Describes the settings of the validation rule parameter.
 */
export declare type ValidationRuleParameter = {
    /**
     * The unique setting key of the parameter.
     */
    key: string;
    /**
     * The type of value.
     */
    type: SchemaType;
    /**
     * Flag whether the setting value must be filled in.
     */
    required: boolean;
    /**
     * The default value.
     */
    default?: unknown;
    /**
     * The editor type of the setting value.
     */
    editorType?: string;
};

/**
 * Describes a set of validation rules.
 */
export declare type ValidationRuleSet = Record<string, ValidationRule>;

/**
 * The validation rule settings.
 */
export declare type ValidationRuleSettings = {
    /**
     * The unique key of the validation rule. The key is unique within the value type.
     */
    key: string;
    /**
     * The type of validator.
     */
    type?: ValidatorType;
    /**
     * Arguments of the validation rule.
     */
    args?: Record<string, any>;
};

/**
 * The validation function factory.
 * @param args the factory arguments.
 * @returns the function that checks the value and returns the result of the rule validation
 * @template Params the factory arguments type.
 */
export declare type ValidatorFactory<Params> = (args: Params) => RuleValidator;

/**
 * The set of metadata of custom validation rules, grouped by the type of value being validated.
 */
export declare type Validators = Partial<Record<SchemaType, CustomValidationRules>>;

/**
 * The type of validator.
 */
export declare type ValidatorType = 'internal' | 'custom';

/**
 * Represents all the metadata of the form viewer components.
 */
export declare class View {
    #private;
    /**
     * Static wrapper for the {@link View} constructor.
     * @param models the components metadata.
     * @returns the {@link View} instance.
     */
    static create(models: Model[]): View;
    /**
     * Creates an instance of the {@link View}.
     * @param models the components metadata.
     */
    constructor(models?: Model[]);
    /**
     * Defines the component's metadata for the form viewer.
     * @param model the component's metadata.
     */
    define(model: Model): void;
    /**
     * Returns the component's metadata for the form viewer for the specified type.
     * @param type the component type.
     * @returns the component metadata for the form viewer for the specified type.
     */
    get(type: string): Model<any>;
    /**
     * Returns the component's metadata for the form viewer for the specified type.
     * @param type the component type.
     * @returns the component metadata for the form viewer for the specified type or undefined.
     */
    find(type: string): Model<any> | undefined;
    /**
     * @returns all component metadata for the form viewer.
     */
    all(): Model<any>[];
    /**
     * Adds a wrapper to the list of viewers for this viewer wrapper.
     * @param wrapper  the viewer wrapper to be added. The wrapper is a component that wraps the form viewer.
     * @returns the {@link View} instance.
     */
    withViewerWrapper: (wrapper: FormViewerWrapper) => this;
    /**
     * Retrieves the viewer wrappers array.
     * @returns the viewer wrappers array.
     */
    get viewerWrappers(): FormViewerWrapper[];
    /**
     * Applies the given CSS loader to the component based on the BiDi layout.
     * @param cssLoaderType the BiDi layout type, either 'common', 'ltr', or 'rtl'.
     * @param loader the function that returns a Promise to load CSS or other required localization resources.
     * @returns the {@link View} instance.
     */
    withCssLoader(cssLoaderType: CssLoaderType, loader: () => Promise<void>): this;
    /**
     * Retrieves the CSS loaders for a given BiDi.
     * @param biDi the BiDi object for which to retrieve the CSS loaders.
     * @returns the array containing the CSS loaders for the specified BiDi.
     */
    getCssLoaders(biDi: BiDi): (() => Promise<void>)[];
}

/**
 * **Internal use only.**
 */
export declare const 
/**
* **Internal use only.**
*/
/**
 * **Internal use only.**
 */
ViewerPropsProvider: Provider<Readonly<FormViewerProps>>;

/**
 * Display resolution type.
 */
export declare type ViewMode = 'desktop' | 'mobile' | 'tablet';

/**
 * The WillUnmountEvent event name.
 */
export declare const WillUnmountEvent = "onWillUnmount";

/**
 * React wrapper component properties.
 */
export declare interface WrapperProps {
    /**
     * The React child node.
     */
    children: ReactNode;
    /**
     * The CSS class name.
     */
    className?: string;
}

export { }
