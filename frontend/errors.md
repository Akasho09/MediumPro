## Property 'signIn' does not exist on type 'JSX.IntrinsicElements'.ts(2339)
capital letter start coponent 


## Type '{ onClick: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void; }' is not assignable to type 'IntrinsicAttributes & ((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)'.



interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
  }

export const Button = ({onClick,children}:ButtonProps)=>{

    return <button onClick={onClick}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">{children}</button>
}