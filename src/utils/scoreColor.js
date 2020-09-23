export const colors = {
    UNKNOWN: '#999',
    BAD: '#d63737',
    OK: '#a7a7a7',
    GOOD: '#5fbb67',
    EXCELLENT: '#3bb33b'
}

export default function getScoreColor(score = 0){
    if (score == 0) return colors.UNKNOWN
    else if (score < 5.5) return colors.BAD
    else if (score < 6.5) return colors.OK
    else if (score < 7.25) return colors.GOOD
    else if (score > 7.25) return colors.EXCELLENT
}