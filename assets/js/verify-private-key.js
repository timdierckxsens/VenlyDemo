function getWalletAddress(pk) {
    try {
        return new ethers.Wallet(pk).address;
    } catch (e) {
        console.log(e);
        return "invalid";
    }
}

function verifyPrivateKey(privateKey) {
    let pk = privateKey;
    if (pk.startsWith("0x")) pk = pk.slice(2);
    if (!ethers.utils.isHexString(`0x${pk}`, 32)) {
        return "invalid";
    }
    return getWalletAddress(pk);
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { getWalletAddress, verifyPrivateKey };
}

if (typeof window !== "undefined") {
    window.onload = function() {
        const btnVerify = document.getElementById("btnVerify");
        const inptPrivateKey = document.getElementById("private-key");

        const handleVerify = function() {
            let privateKey = inptPrivateKey.value;
            document.getElementById("zeroX").innerHTML = privateKey.startsWith('0x');
            if (privateKey.startsWith("0x")) privateKey = privateKey.slice(2);
            document.getElementById("pkLength").innerHTML = privateKey.length;
            document.getElementById("hexCheck").innerHTML = ethers.utils.isHexString(`0x${privateKey}`, 32);
            document.getElementById("walletAddress").innerHTML = verifyPrivateKey(privateKey);
        };

        btnVerify.addEventListener("click", handleVerify);
        inptPrivateKey.addEventListener("keyup", function(e) {
            if (e.key === 'Enter') {
                handleVerify();
            }
        });
    };
}
