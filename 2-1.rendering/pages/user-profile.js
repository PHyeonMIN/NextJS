const UserProfilePage = (props) => {
    return <h1>{props.username}</h1>
}

export default UserProfilePage;

export const getServerSideProps = async (context) => {
    const {params, req, res} = context;

    console.log(req);

    return {
        props: {
            username: 'Max'
        }
    };
};