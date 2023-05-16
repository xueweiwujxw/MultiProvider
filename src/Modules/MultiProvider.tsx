import React from 'react';

/**
 * chainAsChildren
 * Helper function that chains multiple React elements as children of a single element.
 * @param {React.ReactNode} children - The children to be chained.
 * @param {React.ReactElement} component - The component to be cloned and used as the parent element.
 * @returns {React.ReactElement} - The cloned component with chained children.
 */
const chainAsChildren = (
  children: React.ReactNode,
  component: React.ReactElement
): React.ReactElement => React.cloneElement(component, {}, children);

export type MultiProviderProps = React.PropsWithChildren<{
  providers: React.ReactElement[];
}>;

/**
 * MultiProvider
 * A component that allows chaining multiple providers as children.
 * @param {MultiProviderProps} props - Props for the MultiProvider component.
 * @param {React.ReactElement[]} props.providers - An array of React elements representing the providers.
 * @returns {React.ReactElement} - The rendered MultiProvider component.
 * @example
 * // Example usage of MultiProvider
 * <MultiProvider
 *   providers={[
 *     <Provider1 key='provider1' />,
 *     <Provider2 key='provider2' />,
 *     <Provider3 key='provider3' />
 *   ]}
 * >
 *   <App />
 * </MultiProvider>
 */
const MultiProvider: React.FC<MultiProviderProps> = ({
  children,
  providers,
}: MultiProviderProps): React.ReactElement => (
  <React.Fragment>
    {providers.reduceRight(chainAsChildren, children)}
  </React.Fragment>
);

export default MultiProvider;
