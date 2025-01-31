import qrcode

upi_link = "upi://pay?pa=ankitkumar9934nwd@oksbi&pn=Ankit%20Kumar&aid=uGICAgIDv8aj_aA"

qr = qrcode.QRCode(
    version=1,  
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10, 
    border=4,
)
qr.add_data(upi_link)
qr.make(fit=True)

img = qr.make_image(fill='black', back_color='white')

img.save("upi_payment_qr.png")
img.show()
