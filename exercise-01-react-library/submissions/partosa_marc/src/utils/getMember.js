
//this function gets the details of the member using the id
const getMemberById = (memberId, members = []) => {
  return members.find((member) => member.id === memberId);
};

export default getMember;
