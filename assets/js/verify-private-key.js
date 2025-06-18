window.onload = function() {
    const btnVerify = document.getElementById("btnVerify");
    const inptPrivateKey = document.getElementById("private-key")

    function sanitize(value) {
        const div = document.createElement('div');
        div.textContent = value;
        return div.innerHTML;
    }

    function getWalletAddress(pk) {
        try {
            return new ethers.Wallet(pk).address;
        } catch (e) {
            console.log(e);
            return "invalid";
        }
    }

    const verifyPrivateKey = function() {
        let privateKey = inptPrivateKey.value;
        document.getElementById("zeroX").textContent = sanitize(privateKey.startsWith('0x'));
        if (privateKey.startsWith("0x")) privateKey = privateKey.slice(2);
        document.getElementById("pkLength").textContent = sanitize(privateKey.length);
        document.getElementById("pkLength").textContent = sanitize(privateKey.length);
        document.getElementById("hexCheck").textContent = sanitize(ethers.utils.isHexString(`0x${privateKey}`, 32));
        document.getElementById("walletAddress").textContent = sanitize(getWalletAddress(privateKey));
    };

    btnVerify.addEventListener("click", verifyPrivateKey);
    inptPrivateKey.addEventListener("keyup", function(e) {
        if (e.key === 'Enter') {
            verifyPrivateKey();
        }
    })
};
