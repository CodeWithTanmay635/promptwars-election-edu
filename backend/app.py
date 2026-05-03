from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Enable CORS for frontend

# Server-side Chat Flow Logic
chat_flow = {
    "start": {
        "message": "Welcome to your Professional Election Guide.<br><br>How can I assist you with the voting process today?",
        "options": [
            { "text": "Begin step-by-step guide", "next": "step1" },
            { "text": "Start voting simulation", "next": "sim_start" },
            { "text": "Quick facts summary", "next": "quick_summary" }
        ]
    },
    "step1": {
        "message": "<strong>Step 1: The Importance of Voting</strong><br><ul><li><strong>Civic Duty:</strong> Voting is the primary way to choose community leadership.</li><li><strong>Local Impact:</strong> It directly affects funding for schools, infrastructure, and public services.</li><li><strong>Representation:</strong> High turnout ensures the results accurately reflect the public's will.</li></ul>How would you like to proceed?",
        "options": [
            { "text": "Proceed to Step 2: Registration", "next": "step2" },
            { "text": "Take a brief knowledge check", "next": "quiz_step1" }
        ]
    },
    "step2": {
        "message": "<strong>Step 2: Voter Registration</strong><br><ul><li><strong>Verify Eligibility:</strong> Ensure you meet age and citizenship requirements.</li><li><strong>Submit Application:</strong> Register online, by mail, or at designated state offices.</li><li><strong>Observe Deadlines:</strong> Applications must be submitted prior to state-specific deadlines.</li></ul>What is our next step?",
        "options": [
            { "text": "Proceed to Step 3: Voting Day", "next": "step3" },
            { "text": "Review common registration errors", "next": "mistakes_reg" },
            { "text": "Start registration simulation", "next": "sim_reg" }
        ]
    },
    "step3": {
        "message": "<strong>Step 3: Election Day Process</strong><br><ul><li><strong>Locate Polling Place:</strong> Verify your assigned location via your local election portal.</li><li><strong>Identification:</strong> Bring appropriate photo ID if required by your jurisdiction.</li><li><strong>Cast Ballot:</strong> Complete your ballot privately and securely.</li></ul>Are you ready for the final step?",
        "options": [
            { "text": "Proceed to Step 4: Post-Election", "next": "step4" },
            { "text": "Learn about absentee voting", "next": "absentee" }
        ]
    },
    "step4": {
        "message": "<strong>Step 4: Post-Election Actions</strong><br><ul><li><strong>Confirmation:</strong> Receive your 'I Voted' verification.</li><li><strong>Track Results:</strong> Monitor official channels for certified election outcomes.</li><li><strong>Civic Engagement:</strong> Continue observing your elected officials' actions.</li></ul>You have successfully completed the guide.",
        "options": [
            { "text": "Restart the guide", "next": "start" },
            { "text": "Try a scenario simulation", "next": "sim_start" }
        ]
    },
    "quick_summary": {
        "message": "<strong>Voting Quick Summary:</strong><br><ul><li><strong>Register:</strong> Complete well in advance of election day.</li><li><strong>Prepare:</strong> Locate your polling place and review the sample ballot.</li><li><strong>Vote:</strong> Bring necessary ID and cast your ballot in person or via mail.</li></ul>",
        "options": [
            { "text": "Start the full guide", "next": "step1" },
            { "text": "Try a voting simulation", "next": "sim_start" }
        ]
    },
    "sim_start": {
        "message": "<strong>Scenario:</strong> You recently turned 18. A major municipal election is occurring next month. You wish to participate but have not taken any action yet.<br><br>What is your initial step?",
        "options": [
            { "text": "Assume automatic registration.", "next": "sim_mistake1" },
            { "text": "Verify state registration requirements online.", "next": "sim_reg_success" }
        ]
    },
    "sim_mistake1": {
        "message": "<strong>Correction:</strong><br><ul><li>In most jurisdictions, voter registration is not automatic upon turning 18.</li><li>Waiting until election day may result in disqualification.</li></ul>Let us reassess. What is the correct initial step?",
        "options": [
            { "text": "Verify registration requirements online.", "next": "sim_reg_success" }
        ]
    },
    "sim_reg_success": {
        "message": "Excellent. You have successfully registered prior to the deadline.<br><br><strong>Fast Forward:</strong> It is Election Day. You arrive at the polling location, and the official requests identification.<br><br>How do you respond?",
        "options": [
            { "text": "State that you forgot your ID.", "next": "sim_mistake2" },
            { "text": "Present your state-issued photo ID.", "next": "sim_vote_success" }
        ]
    },
    "sim_mistake2": {
        "message": "<strong>Note:</strong> Without ID, you may only be permitted to cast a 'provisional ballot', which undergoes strict verification and may not be counted. It is critical to adhere to local ID requirements.<br><br>Assuming you retrieved your ID:",
        "options": [
            { "text": "Present my state-issued ID.", "next": "sim_vote_success" }
        ]
    },
    "sim_vote_success": {
        "message": "Success. Your ID is verified, you receive a ballot, cast your vote in private, and submit it securely.<br><br><strong>Simulation Complete.</strong>",
        "options": [
            { "text": "Return to main menu", "next": "start" },
            { "text": "Review the step-by-step guide", "next": "step1" }
        ]
    },
    "quiz_step1": {
        "message": "<strong>Knowledge Check:</strong> Which of the following is a direct outcome of participating in local elections?<br><br>A) Receiving federal tax exemptions.<br>B) Determining the allocation of municipal funds for schools and infrastructure.",
        "options": [
            { "text": "A) Tax exemptions.", "next": "quiz_fail" },
            { "text": "B) Allocation of municipal funds.", "next": "step2" }
        ]
    },
    "quiz_fail": {
        "message": "Incorrect. While advantageous, voting does not directly grant personal tax exemptions. It does, however, dictate community resource allocation.<br><br>Are you ready for Step 2?",
        "options": [
            { "text": "Proceed to Step 2", "next": "step2" }
        ]
    },
    "mistakes_reg": {
        "message": "<strong>Common Registration Errors:</strong><br><ul><li><strong>Missed Deadlines:</strong> Failing to register within the required timeframe.</li><li><strong>Outdated Information:</strong> Neglecting to update address changes after moving.</li><li><strong>Clerical Errors:</strong> Typographical errors in names or addresses that delay processing.</li></ul>",
        "options": [
            { "text": "Understood. Proceed to Step 3", "next": "step3" }
        ]
    },
    "sim_reg": {
        "message": "<strong>Scenario:</strong> You relocated to a new residence last week. The election is in 30 days.<br><br>What action is required regarding your voter registration?",
        "options": [
            { "text": "No action; it updates automatically.", "next": "sim_reg_fail" },
            { "text": "Submit a change of address for registration.", "next": "step3" }
        ]
    },
    "sim_reg_fail": {
        "message": "<strong>Correction:</strong> Voter registration does not automatically track residential moves. Failure to update may direct you to an incorrect polling location and invalidate your vote.<br><br>Let us proceed to election day procedures.",
        "options": [
            { "text": "Proceed to Step 3", "next": "step3" }
        ]
    },
    "absentee": {
        "message": "<strong>Absentee & Mail-In Voting:</strong><br><ul><li><strong>Requesting:</strong> Apply for a mail-in ballot if unable to attend in person.</li><li><strong>Completion:</strong> Complete the ballot following strict signature and notary instructions (if applicable).</li><li><strong>Submission:</strong> Return via mail or designated drop boxes prior to the deadline.</li></ul>",
        "options": [
            { "text": "Proceed to Step 4", "next": "step4" }
        ]
    }
}

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    next_state = data.get('next', 'start')
    
    if next_state in chat_flow:
        return jsonify(chat_flow[next_state])
    else:
        return jsonify({
            "message": "An error occurred. Please restart.",
            "options": [{"text": "Start Over", "next": "start"}]
        }), 400

if __name__ == '__main__':
    app.run(port=5000, debug=True)
