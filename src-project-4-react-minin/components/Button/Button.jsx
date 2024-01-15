import classes from './Button.module.css';

// export default function Button({ children, onClick, isActive }) {
//   return (
//     <button className={classes.button + ' ' + (isActive ? classes.active : '')} onClick={onClick}>
//       {children}
//     </button>
//   );
// }

export default function Button({ children, isActive, ...props }) {
  return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      {children}
    </button>
  )
}
