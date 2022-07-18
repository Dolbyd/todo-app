import "./Donate.css";

interface DonateProps {
    to: string;
    bank: number;
    branch: number;
    account: number;
}
function Donate(props: DonateProps): JSX.Element {
    return (
        <div className="Donate flex-col-top-center">
            <h1>Donate</h1>
            <span>This is an open source todo application</span>
            <span> please open your ❤️ and give some 💰</span>
            <span>Donate now to : {props.to} | Account Details : {props.bank}-{props.branch}-{props.account}</span>
        </div>
    );
}

export default Donate;