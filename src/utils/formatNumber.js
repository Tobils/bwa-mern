export default function formatNumbering(number){
    const formatNumbering = new Intl.NumberFormat("id-ID")
    return formatNumbering.format(number)
}