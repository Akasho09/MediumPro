
export default function DP( username  : string ){

    let a = username.split(' ');
    return (<div className="rounded-full bg-green-400 h-10 w-10 flex justify-center items-center">{a[0]}{a[1]}</div>
)
}